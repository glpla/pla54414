import {
  formatTime
} from '../../utils/util.js'
const db = wx.cloud.database();
const app = getApp();
Page({
  data: {
    pic: '',
    name: '',
    pass: '',
    tempPass: '',
    fp: '',
    bool: false
  },
  onPic() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // console.log(res);
        this.setData({
          fp: res.tempFilePaths[0]
        })
      },
    })
  },
  onName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  onPass(e) {
    this.setData({
      pass: e.detail.value
    })
  },
  onConfirm(e) {
    this.setData({
      tempPass: e.detail.value
    })
  },
  onReg() {
    if (!this.data.fp) {
      wx.showToast({
        title: '头像为空',
      })
      return;
    }
    if (!this.data.name) {
      wx.showToast({
        title: '用户名为空',
      })
      return;
    }
    if (!this.data.pass) {
      wx.showToast({
        title: '密码为空',
      })
      return;
    }
    if (this.data.pass != this.data.tempPass) {
      wx.showToast({
        title: '俩次密码不一致',
      })
      return;
    }
    this.isHas();
  },
  isHas() {
    db.collection('pla54414-users').get().then(res => {
      let users = res.data;
      let bool = false;
      for (let i = 0; i < users.length; i++) {
        console.log(users[i].userName, this.data.name);
        if (users[i].userName == this.data.name) {
          bool = true;
          break;
        }
      }
      if (bool) {
        wx.showToast({
          title: '用户已存在',
        })
      } else {
        this.saveData();
      }
    })
  },
  saveData() {
    let item = this.data.fp;
    let ext = /\.\w+$/.exec(item);
    let cloudFp = new Date().getTime() + ext;
    // console.log(cloudFp);
    wx.cloud.uploadFile({
      cloudPath: 'pla54414/' + cloudFp,
      filePath: item,
      success: res => {
        console.log(res.fileID);
        let fileId = res.fileID;
        db.collection('pla54414-users').add({
          data: {
            regTime: formatTime(new Date()),
            userName: this.data.name,
            userPass: this.data.pass,
            userPic: fileId
          }
        }).then(res => {
          // 保存成功更新app数据并直接登陆
          app.globalData.userName = this.data.userName;
          app.globalData.userPic = this.data.userPic;
          wx.showModal({
            title: '提示',
            content: '信息保存成功',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                wx.redirectTo({
                  url: '../index/index',
                })
              }
            }
          })
        })
        //返回处理结果
        resolve()
      },
      fail: console.error
    })
  },
  onLoad: function(options) {
    // db.collection('pla54414-users').get().then(res => {
    //   console.log(res);
    //   this.setData({
    //     fp: res.data[2].userPic
    //   })
    // })
  }

})
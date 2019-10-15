import {
  formatTime
} from '../../utils/util.js'
const db = wx.cloud.database();
Page({
  data: {
    pw: '5474..',
    tmp: '',
    isOk: false,
    imgs: [],
    fileID: []
  },
  onPw(e) {
    this.setData({
      tmp: e.detail.value
    })
  },
  onLogin() {
    if (this.data.pw = this.data.tmp) {
      this.setData({
        isOk: true
      })
    } else {
      wx.showToast({
        title: '密码错误',
      })
    }
  },
  uploadImg() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        this.setData({
          imgs: this.data.imgs.concat(tempFilePaths)
        })
        // console.log(this.data.imgs)
      }
    })
  },
  homeUpload() {
    this.upload('pla54414-swiper')
  },
  wineUpload() {
    this.upload('pla54414-wine')
  },
  upload(path) {
    if (this.data.imgs.length == 0) {
      wx.showToast({
        title: '请选择图片',
      })
      return;
    }
    wx.showToast({
      title: '上传中',
      icon: 'loading'
    })
    let promiseAll = [];
    for (let i = 0; i < this.data.imgs.length; i++) {
      // console.log(index)
      promiseAll.push(new Promise((resolve, reject) => {
        let item = this.data.imgs[i];
        let ext = /\.\w+$/.exec(item)[0];
        wx.cloud.uploadFile({
          cloudPath: path + '/' + new Date().getTime() + ext,
          filePath: item,
          success: res => {
            // console.log(res.fileID)
            this.setData({
              //数组追加哦,否则后面会覆盖前面
              fileID: this.data.fileID.concat(res.fileID)
            })
            //返回处理结果
            resolve()
          },
          fail: console.error
        })
      }))
    }
    Promise.all(promiseAll).then(res => {
      //所有的上传都结束了才会执行入库操作
      // console.log('upload done')
      db.collection(path).add({
          data: {
            time: formatTime(new Date()),
            fileID: this.data.fileID,
            createTime: db.serverDate()
          }
        })
        .then(res => {
          wx.hideToast()
          wx.showToast({
            title: '提交成功',
          })
          this.setData({
            imgs: [],
            fileID: []
          })
        })
        .catch(err => {
          console.error(err)
        })
    }).catch()

  },
  previewImg(e) {
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: this.data.imgs
    })
  },
  onLoad: function(options) {}

})
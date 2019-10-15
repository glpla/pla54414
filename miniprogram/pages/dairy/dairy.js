import {
  formatTime
} from '../../utils/util.js'
const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    msg: '',
    imgs: [],
    fileID: []
  },
  onChange(e) {
    console.log(e.detail.value);
    this.setData({
      msg: e.detail.value
    })
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
  onSubmit() {
    if (!this.data.msg) {
      wx.showToast({
        title: '内容为空',
      })
      return;
    }
    wx.showToast({
      title: '提交中',
    })
    let promiseAll = [];
    for (let i = 0; i < this.data.imgs.length; i++) {
      // console.log(index)
      promiseAll.push(new Promise((resolve, reject) => {
        let item = this.data.imgs[i];
        let ext = /\.\w+$/.exec(item)[0];
        wx.cloud.uploadFile({
          cloudPath: 'pla54414-dairy/' + new Date().getTime() + ext,
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
      db.collection('daily').add({
          data: {
            time: formatTime(new Date()),
            msg: this.data.msg,
            fileID: this.data.fileID,
            createTime: db.serverDate()
          }
        })
        .then(res => {
          wx.hideToast()
          wx.showToast({
            title: '提交成功',
          })
        })
        .catch(err => {
          console.error(err)
        })
    }).catch()
  },
  onHistory() {
    wx.navigateTo({
      url: './detail/detail',
    })
  },
  previewImg(e) {
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: this.data.imgs
    })
  }
})
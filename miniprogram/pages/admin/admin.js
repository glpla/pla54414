import {
  formatTime
} from '../../utils/util.js'
const db = wx.cloud.database();
Page({
  // imgs: for mutil; img for single
  data: {
    pw: '5474..',
    tmp: '',
    isOk: false,
    imgs: [],
    img: '',
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
  chooseImg() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const tempFilePaths = res.tempFilePaths
        this.setData({
          img: tempFilePaths[0]
        })
      }
    })
  },
  homeUpload() {
    this.uploadSigle('pla54414-swiper')
  },
  wineUpload() {
    this.uploadSigle('pla54414-wine')
  },
  uploadSigle(path) {
    if (!this.data.img) {
      wx.showToast({
        title: '请选择图片',
      })
      return;
    }
    wx.showToast({
      title: '上传中',
      icon: 'loading'
    })
    let ext = /\.\w+$/.exec(this.data.img);
    let cloudPath = path + '/' + new Date().getTime() + ext;
    wx.cloud.uploadFile({
      cloudPath: cloudPath,
      filePath: this.data.img,
      success: res => {
        db.collection(path).add({
          data: {
            fileID: res.fileID,
            time: formatTime(new Date()),
            createTime: db.serverDate()
          }
        }).then(res => {
          wx.hideToast()
          wx.showToast({
            title: '上传成功',
          })
          this.setData({
            img: ''
          })
        })
      },
      fail: console.error
    })
  },
  // uploadImgMutil() {
  //   wx.chooseImage({
  //     count: 9,
  //     sizeType: ['original', 'compressed'],
  //     sourceType: ['album', 'camera'],
  //     success: res => {
  //       // tempFilePath可以作为img标签的src属性显示图片
  //       const tempFilePaths = res.tempFilePaths
  //       this.setData({
  //         imgs: this.data.imgs.concat(tempFilePaths)
  //       })
  //       // console.log(this.data.imgs)
  //     }
  //   })
  // },
  // uploadMutil(path) {
  //   if (this.data.imgs.length == 0) {
  //     wx.showToast({
  //       title: '请选择图片',
  //     })
  //     return;
  //   }
  //   wx.showToast({
  //     title: '上传中',
  //     icon: 'loading'
  //   })
  //   let promiseAll = [];
  //   for (let i = 0; i < this.data.imgs.length; i++) {
  //     // console.log(index)
  //     promiseAll.push(new Promise((resolve, reject) => {
  //       let item = this.data.imgs[i];
  //       let ext = /\.\w+$/.exec(item)[0];
  //       wx.cloud.uploadFile({
  //         cloudPath: path + '/' + new Date().getTime() + ext,
  //         filePath: item,
  //         success: res => {
  //           // console.log(res.fileID)
  //           this.setData({
  //             //数组追加哦,否则后面会覆盖前面
  //             fileID: this.data.fileID.concat(res.fileID)
  //           })
  //           //返回处理结果
  //           resolve()
  //         },
  //         fail: console.error
  //       })
  //     }))
  //   }
  //   Promise.all(promiseAll).then(res => {
  //     //所有的上传都结束了才会执行入库操作
  //     // console.log('upload done')
  //     db.collection(path).add({
  //         data: {
  //           time: formatTime(new Date()),
  //           fileID: this.data.fileID,
  //           createTime: db.serverDate()
  //         }
  //       })
  //       .then(res => {
  //         wx.hideToast()
  //         wx.showToast({
  //           title: '提交成功',
  //         })
  //         this.setData({
  //           imgs: [],
  //           fileID: []
  //         })
  //       })
  //       .catch(err => {
  //         console.error(err)
  //       })
  //   }).catch()

  // },
  // previewImg(e) {
  //   let src = e.currentTarget.dataset.src;
  //   wx.previewImage({
  //     current: src,
  //     urls: this.data.imgs
  //   })
  // },
  onLoad: function(options) {
    // this.setData({
    //   img:'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571191228538.png'
    // })
  }

})
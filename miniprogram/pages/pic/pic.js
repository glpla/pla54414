const db = wx.cloud.database()
Page({
  data: {
    cIndex: 100,
    imgs: [],
    preImgs: []
  },
  preImg(e) {
    // console.log(e.currentTarget.dataset.img)
    wx.previewImage({
      current: e.currentTarget.dataset.img,
      urls: this.data.preImgs
    })
  },
  onLoad: function(options) {
    db.collection('pla54414-swiper').get().then(res => {
      // console.log(res.data)
      let arr = res.data;
      this.setData({
        imgs: arr
      })
      for (let i = 0; i < arr.length; i++) {
        this.data.preImgs.push(arr[i].fileID)
      }
    })
  }
})
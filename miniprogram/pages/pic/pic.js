const db = wx.cloud.database()
Page({
  data: {
    cIndex: 100,
    total: '',
    len: 5,
    idx: 0,
    imgs: [],
    isDone: false,
    preImgs: []
  },
  preImg(e) {
    // console.log(e.currentTarget.dataset.img)
    wx.previewImage({
      current: e.currentTarget.dataset.img,
      urls: this.data.preImgs
    })
  },
  loadImg() {
    if (this.data.imgs.length > 0 && this.data.total == this.data.imgs.length) {
      wx.showToast({
        title: '没有更多数据啦',
      })
      this.setData({
        isDone: true
      })
      return;
    }
    wx.showToast({
      title: '数据加载中',
    })
    let len = this.data.len;
    let num = this.data.len * this.data.idx;
    db.collection('pla54414-swiper').skip(num).limit(len).get().then(res => {
      // console.log(res.data)
      let arr = res.data;
      this.setData({
        imgs: this.data.imgs.concat(arr)
      })
      wx.hideToast();
      console.log('imgs', this.data.imgs)
      for (let i = 0; i < arr.length; i++) {
        this.data.preImgs.push(arr[i].fileID)
      }
    })
  },
  onLoad(options) {
    if (!this.data.total) {
      db.collection('pla54414-swiper').count().then(res => {
        this.setData({
          total: res.total
        })
        // console.log(res.total)
      })
    }
    this.loadImg();
  },
  onPullDownRefresh() {
    wx.showToast({
      title: '数据更新中',
    })
    this.setData({
      idx: 0,
      imgs: []
    }, res => {
      this.loadImg();
      wx.stopPullDownRefresh();
    })

  },
  onReachBottom() {
    this.setData({
      idx: this.data.idx + 1
    }, res => {
      this.loadImg();
    })
    // console.log(this.data.len)
  }
})
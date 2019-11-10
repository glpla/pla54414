const db = wx.cloud.database();
Page({
  data: {
    records: [],
    total: '',
    len: 10,
    idx: 0,
    isDone: false,
    showToTop: false,
    tips: ''
  },
  previewImg(e) {
    let src = e.currentTarget.dataset.src;
    let imgs = e.currentTarget.dataset.imgs;
    console.log(src)
    wx.previewImage({
      current: src,
      urls: imgs
    })
  },
  onQuery() {
    if (this.data.records.length > 0 && this.data.total == this.data.records.length) {
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
    db.collection('pla54414-dairy').orderBy('createTime', 'desc').skip(num).limit(len).get()
      .then(res => {
        // console.log(res)
        let tmp = this.data.records.concat(res.data);
        this.setData({
          records: tmp
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  onLoad: function(options) {
    wx.showToast({
      title: '数据加载中',
    })
    if (!this.data.total) {
      db.collection('pla54414-dairy').count().then(res => {
        this.setData({
          total: res.total
        })
        console.log(res.total)
      })
    }
    this.onQuery();
  },
  onPullDownRefresh() {
    wx.showToast({
      title: '数据更新中',
    })
    this.setData({
      idx: 0,
      imgs: []
    }, res => {
      this.onQuery();
      wx.stopPullDownRefresh();
    })

  },
  onReachBottom() {
    this.setData({
      idx: this.data.idx + 1
    }, res => {
      this.onQuery();
    })
    // console.log(this.data.len)
  },
  onPageScroll: function(e) {
    let bool = false;
    if (e.scrollTop > 100) {
      bool = true
    }
    this.setData({
      showToTop: bool
    })
  }
})
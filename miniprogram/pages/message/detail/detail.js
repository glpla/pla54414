const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    records: [],
    showToTop: false
  },
  onQuery() {
    db.collection('pla54414-msg').orderBy('time', 'desc').get().then(res => {
      // console.log(res.data)
      this.setData({
        records: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onLoad: function(options) {
    this.onQuery();
  },
  onPullDownRefresh() {
    this.onQuery();
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
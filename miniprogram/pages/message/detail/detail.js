const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    records: []
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
  }
})
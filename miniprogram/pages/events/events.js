const db = wx.cloud.database();
Page({
  data: {
    item: null
  },
  onLoad: function(options) {
    db.collection('pla54414-events').doc(options.id).get().then(res => {
      this.setData({
        item: res.data
      })
    })
  }
})
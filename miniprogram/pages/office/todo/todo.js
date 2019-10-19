const db = wx.cloud.database();
Page({
  data: {
    id: '',
    item: null
  },
  onToRes(e) {
    wx.navigateTo({
      url: '../doing/doing?id=' + this.data.id,
    })
  },
  onLoad: function(options) {
    db.collection('pla54414-office').doc(options.id).get().then(res => {
      this.setData({
        item: res.data,
        id: options.id
      })
    })
  }
})
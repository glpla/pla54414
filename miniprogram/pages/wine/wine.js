const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    imgs: [],
    idx: 700
  },
  onLoad: function(options) {
    db.collection('pla54414-wine').limit(10).get().then(res => {
      // console.log(res.data)
      this.setData({
        imgs: res.data
      })
    })
  }

})
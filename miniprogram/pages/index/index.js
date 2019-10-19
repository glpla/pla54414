const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    imgs: []
  },
  onLoad: function(options) {
    db.collection('pla54414-swiper').orderBy('time', 'desc').limit(10).get().then(res => {
      // console.log(res.data)
      this.setData({
        imgs: res.data
      })
    })
  }
})
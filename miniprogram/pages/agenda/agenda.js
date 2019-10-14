const db = wx.cloud.database();
Page({
  data: {
    records: []
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
  onLoad: function(options) {
    db.collection('daily').orderBy('createTime', 'desc').get()
      .then(res => {
        console.log(res)
        this.setData({
          records: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
})
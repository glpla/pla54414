const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    imgs: [],
    idx: 700
  },
  onLoad: function(options) {
    db.collection('pla54414-wine').get().then(res => {
      console.log(res.data)
      let len = res.data.length;
      this.setData({
        imgs: res.data[len - 1].fileID
      })
    })
  }

})
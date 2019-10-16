const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    imgs: []
  },
  onLoad: function(options) {
    // db.collection('pla54414-swiper').get().then(res => {
    //   console.log(res.data)
    //   let len = res.data.length;
    //   this.setData({
    //     imgs: res.data[len - 1].fileID.slice(-11, -1)
    //   })
    // })
    
  }

})
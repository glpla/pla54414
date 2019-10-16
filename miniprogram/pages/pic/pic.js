const db = wx.cloud.database()
Page({
  data: {
    imgs: [],
    tmp: null,
    img: null
  },
  userInfo(e) {
    console.log(e.detail.userInfo)
  },
  onLoad: function(options) {
    db.collection('imgs').get().then(res => {
      console.log(res.data[0].fileID[0])
      let tm = res.data[0].fileID[0];
      // this.setData({
      //   img: tm
      // })
      // let img = [];
      // for (let i = 0; i < tm.length; i++) {
      //   wx.cloud.getTempFileURL({
      //     fileList: tm[i].fileID,
      //     success: res => {
      //       console.log(res);
      //       img.push(...res.fileList);
      //       this.setData({
      //         imgs: img
      //       })
      //       console.log(img)
      //     }
      //   })
      // }

    })
  }
})
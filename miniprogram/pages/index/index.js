const app = getApp()
const bgm = wx.getBackgroundAudioManager();
bgm.title = '此时此刻';
bgm.epname = '此时此刻';
bgm.singer = '许巍';
bgm.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';

const db = wx.cloud.database()

Page({
  data: {
    isPlay: true,
    imgs: [{
      id: 100,
      url: 'http://m.qpic.cn/psb?/V11zZTwc1KBViZ/omvvSm9v*MzsZW2JEJt8b8gEuqSDrvBPolrlhYU.K5U!/b/dL8AAAAAAAAA&bo=OAQqAzgEKgMDaUw!&rf=viewer_4'
    }, {
      id: 101,
      url: 'http://m.qpic.cn/psb?/V11zZTwc1KBViZ/aAJCp3P5p*TTKsngLHEsewy88dEEPKsgoQKozlOl.FQ!/b/dL8AAAAAAAAA&bo=OAQqAzgEKgMDCSw!&rf=viewer_4'
    }, {
      id: 102,
      url: 'http://m.qpic.cn/psb?/V11zZTwc1KBViZ/.rZwT5DGkvTBm12U4sbNK2K5RY8.O7auUo0ezaAP2po!/b/dL4AAAAAAAAA&bo=OAQqAzgEKgMDWXw!&rf=viewer_4'
    }, {
      id: 103,
      url: 'http://m.qpic.cn/psb?/V11zZTwc1KBViZ/JyD5cXKD6jxT0EEB1QYMbZSficf9pN.rkupENPfSP2U!/b/dFMBAAAAAAAA&bo=OAQqAzgEKgMDWXw!&rf=viewer_4'

    }, {
      id: 104,
      url: 'http://m.qpic.cn/psb?/V11zZTwc1KBViZ/yRI19i9mbPOmir5cNTRTsGu97A2caZyJ972WQ3H0jaU!/b/dFMBAAAAAAAA&bo=OAQqAzgEKgMDaUw!&rf=viewer_4'
    }],
    info: []
  },
  onMsg() {
    wx.navigateTo({
      url: '../msg/msg',
    })
  },
  onPlay() {
    if (this.data.isPlay) {
      bgm.pause();
      this.setData({
        isPlay: false
      })
    } else {
      bgm.play();
      this.setData({
        isPlay: true
      })
    }
  },
  onLoad: function(options) {
    this.onQuery();
    // console.log(app.globalData.userInfo, app.globalData.city, app.globalData.province);
    bgm.onEnded(() => {
      bgm.play();
      this.setData({
        isPlay: true
      })
    })
    bgm.onPlay(() => {
      this.setData({
        isPlay: true
      })
    })
    bgm.onPause(() => {
      this.setData({
        isPlay: false
      })
    })
  },
  onQuery() {
    wx.showToast({
      title: '数据加载中',
      icon: "loading"
    })
    db.collection('pla54414-info').get().then(res => {
      console.log(res.data)
      this.setData({
        info: res.data
      })
      // console.log(this.data.records)
      wx.hideToast();
      wx.showToast({
        title: '数据加载完毕',
        icon: "none"
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
})
const app = getApp()
const bgm = wx.getBackgroundAudioManager();
bgm.title = '此时此刻';
bgm.epname = '此时此刻';
bgm.singer = '许巍';
bgm.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46';

const db = wx.cloud.database()

let QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
let qqmapsdk = new QQMapWX({
  key: 'U6QBZ-ROQ3W-PFMRZ-O4VA5-LZOKQ-G7FZA'
});

Page({
  data: {
    avatarUrl: './user-unlogin.png',
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
    info: [],
    isShow: true
  },
  onGetUserInfo: function(e) {
    console.log(e)
    if (!this.logged && e.detail.userInfo) {
      app.globalData.logged = true;
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        avatarUrl: e.detail.userInfo.avatarUrl
      })

      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          // console.log('res', res.result.openid);
          app.globalData.openid = res.result.openid;
          if (app.globalData.userid == app.globalData.openid) {
            app.globalData.self = true;
          }
          console.log(app.globalData.self);
        },
        fail: console.error
      })


    }
  },
  checkLocation() {
    qqmapsdk.geocoder({
      address: "广西桂林七星区高新万达广场",
      success(res) {
        wx.openLocation({
          latitude: res.result.location.lat,
          longitude: res.result.location.lng
        })
      }
    })

  },
  makeCall() {
    wx.makePhoneCall({
      phoneNumber: '13707735481'
    })
  },
  toMsg() {
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
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            lang: "zh_CN",
            success: res => {
              app.globalData.userInfo = res.userInfo;
              this.setData({
                avatarUrl: res.userInfo.avatarUrl
              })
            }
          })
        }
      }
    })
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        // 调用sdk接口
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            //获取当前地址成功
            // console.log(res);
            app.globalData.city = res.result.address_component.city;
            app.globalData.province = res.result.address_component.province;
          },
          fail: res => {
            console.log('获取当前地址失败');
          }
        });
      },
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
      console.log(this.data.records)
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
  onShareAppMessage: function() {
    return {
      title: 'bigTree online',
      path: '/pages/index'
    }
  }
})
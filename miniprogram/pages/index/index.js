const app = getApp();
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    isShow: true,
    isSelf: false
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
  onLoad: function(options) {
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         lang: "zh_CN",
    //         success: res => {
    //           app.globalData.userInfo = res.userInfo;
    //           this.setData({
    //             avatarUrl: res.userInfo.avatarUrl
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
    // wx.getLocation({
    //   type: 'wgs84',
    //   success: res => {
    //     // 调用sdk接口
    //     qqmapsdk.reverseGeocoder({
    //       location: {
    //         latitude: res.latitude,
    //         longitude: res.longitude
    //       },
    //       success: res => {
    //         //获取当前地址成功
    //         // console.log(res);
    //         app.globalData.city = res.result.address_component.city;
    //         app.globalData.province = res.result.address_component.province;
    //       },
    //       fail: res => {
    //         console.log('获取当前地址失败');
    //       }
    //     });
    //   },
    // })
    // this.setData({
    //   isSelf: app.globalData.self
    // })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
})
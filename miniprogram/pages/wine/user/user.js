Page({
  data: {
    avatarUrl: '',
    nickName: '',
    logged: false
  },
  getUserInfo(e) {
    console.log(e.detail.userInfo);
    // console.log(e)
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        nickName: e.detail.userInfo.nickName
      })
      wx.setStorageSync('user', e.detail.userInfo.nickName);
    }
  },
  onLike() {
    wx.navigateTo({
      url: '../like/like',
    })
  },
  onList() {
    wx.navigateTo({
      url: '../list/list',
    })
  },
  onSetup() {
    wx.navigateTo({
      url: '../setup/setup',
    })
  },
  onAddress() {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  onLoad: function(options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            lang: "zh_CN", //拉取中文信息，方便
            success: res => {
              console.log(res.userInfo);
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName
              })
              wx.setStorageSync('user', res.userInfo.nickName);
            }
          })
        }
      }
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {}

})
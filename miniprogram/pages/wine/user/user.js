const app = getApp();
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    user: {},
    logged: false,
    admin: ''
  },
  onLike() {
    wx.navigateTo({
      url: '../like/like',
    })
  },
  onCart() {
    wx.navigateTo({
      url: '../cart/cart?openid=' + this.data.openid
    })
  },
  onList() {
    wx.navigateTo({
      url: '../list/list?openid=' + this.data.openid
    })
  },
  onSetup() {
    console.log(this.data.user)
    wx.navigateTo({
      url: '../../reg/reg?openid=' + this.data.openid + '&user=' + JSON.stringify(this.data.user)
    })
  },
  onAddress() {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        user: e.detail.userInfo
      })
      this.onGetOpenid();
    }
  },
  onLoad: function(options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                logged: true,
                avatarUrl: res.userInfo.avatarUrl,
                user: res.userInfo
              })
            }
          })
        }
      }
    })
    wx.getStorage({
      key: 'openid',
      success: (res) => {
        console.log('openid', res.data)
        this.setData({
          openid: res.data
        })
      }
    })
    this.setData({
      admin: app.globalData.userid
    })
  },
  onGetOpenid: function() {
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        this.setData({
          openid: res.result.openid
        })
        wx.setStorage({
          key: 'openid',
          data: res.result.openid,
          success: res => {
            console.log('openid saved ok');
          }
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  onAdmin() {
    wx.navigateTo({
      url: '../admin/admin',
    })
  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {}
})
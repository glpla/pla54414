const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    showToTop: false,
    info: {},
    num: 0,
    user: {},
    openid: ''
  },
  onBuyCart() {
    if (!this.data.user.nickName) {
      wx.showModal({
        title: '提示',
        content: '您还没有登陆,现在登陆吗?',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '../user/user',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      console.log('buy cart')
      if (this.data.num == 0) {
        wx.showToast({
          title: '数量为零',
        })
        return;
      }
    }
  },
  onAddCart() {
    if (!this.data.user.nickName) {
      wx.showModal({
        title: '提示',
        content: '您还没有登陆,现在登陆吗?',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '../user/user',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      if (this.data.num == 0) {
        wx.showToast({
          title: '数量为零',
        })
        return;
      }
      // console.log('add cart');
      db.collection('pla54414-wine-order').add({
        data: {
          num: this.data.num,
          title: this.data.info.title,
          price: this.data.info.price,
          createTime: db.serverDate(),
          flag: false
        }
      }).then(res => {
        console.log(res);
        wx.showToast({
          title: '成功加入购物车',
        })
      })
    }
  },
  onSub() {
    let num = this.data.num;
    if (num > 0) {
      num--;
      this.setData({
        num
      })
    }
  },
  onNum(e) {
    this.setData({
      num: e.detail.value
    })
  },
  onAdd() {
    let num = this.data.num;
    num++;
    this.setData({
      num
    })
  },
  onCart() {
    wx.navigateTo({
      url: '../cart/cart?openid=' + this.data.openid
    })
  },
  onLoad: function(options) {
    this.loadItem(options.idx);
    this.getUser();
    wx.getStorage({
      key: 'openid',
      success: (res) => {
        // console.log('openid', res.data)
        this.setData({
          openid: res.data
        })
      }
    })
  },
  loadItem(idx) {
    db.collection('pla54414-wine-product').doc(idx).field({
      url: false
    }).get().then(res => {
      console.log(res);
      this.setData({
        info: res.data
      })
    })
  },
  onReady: function() {},
  onShow: function() {
    this.getUser();
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onPageScroll: function(e) {
    let bool = false;
    if (e.scrollTop > 100) {
      bool = true
    }
    this.setData({
      showToTop: bool
    })
  },
  makeCall() {
    wx.makePhoneCall({
      phoneNumber: '13707735481'
    })
  },
  onLike() {},
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log("来自页面内转发按钮");
      console.log(res.target);
    } else {
      console.log("来自右上角转发菜单")
    }
    return {
      title: '分享给更多的朋友吧',
      path: '/pages/wine/detail/detail?idx=ec8b1d81-f100-4fa8-bb54-acf31bdb6263',
      success: function(res) {
        wx.showToast({
          title: '转发成功',
        })
      }
    }
  },
  //开启分享
  showShareMenu() {
    wx.showShareMenu();
    console.log("显示了当前页面的转发按钮");
  },
  //关闭分享
  hideShareMenu() {
    wx.hideShareMenu();
    console.log("隐藏了当前页面的转发按钮");
  },
  getUser() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                user: res.userInfo
              })
            }
          })
        }
      }
    })
  }
})
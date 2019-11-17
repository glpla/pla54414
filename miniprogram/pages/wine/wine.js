const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    isFocus: false,
    imgs: [],
    idx: 700,
    product: [],
    isDone: false,
    len: 6,
    idx: 0,
    showToTop: false,
    avatarUrl: './user-unlogin.png',
    user: {}
  },
  onFocus() {
    this.setData({
      isFocus: true
    })
  },
  onBlur() {
    this.setData({
      isFocus: false
    })
  },
  onUser() {
    wx.navigateTo({
      url: './user/user',
    })
  },
  onDetail(e) {
    wx.navigateTo({
      url: './detail/detail?idx=' + e.currentTarget.dataset.idx,
    })
  },
  onPageScroll: function(e) {
    let bool = false;
    if (e.scrollTop > 100) {
      bool = true
    }
    this.setData({
      showToTop: bool
    })
  },
  onPullDownRefresh() {
    wx.showToast({
      title: '数据更新中',
    })
    this.setData({
      idx: 0,
      product: []
    }, res => {
      this.loadImg('pla54414-wine-product');
      wx.stopPullDownRefresh();
    })
  },
  onReachBottom() {
    this.setData({
      idx: this.data.idx + 1
    }, res => {
      this.loadImg('pla54414-wine-product');
    })
  },
  onLoad: function(options) {
    this.getTotal('pla54414-wine-product');
    this.loadImg('pla54414-wine-product');
    this.getPic10('pla54414-wine');
    this.getUser();
  },
  getPic10(dbn) {
    db.collection(dbn).limit(10).get().then(res => {
      this.setData({
        imgs: res.data
      })
    })
  },
  getTotal(dbn) {
    wx.cloud.callFunction({
      name: 'total',
      data: {
        dbName: dbn
      }
    }).then(res => {
      // console.log(res);
      this.setData({
        total: res.result.total
      })
    })
  },
  loadImg(dbn) {
    if (this.data.product.length > 0 && this.data.total == this.data.product.length) {
      wx.showToast({
        title: '没有更多数据啦',
      })
      this.setData({
        isDone: true
      })
      return;
    }
    wx.showToast({
      title: '数据加载中',
    })
    let len = this.data.len;
    let num = this.data.len * this.data.idx;
    db.collection(dbn).field({
      title: true,
      desc: true,
      price: true,
      flag: true,
      'old-price': true,
      url: true
    }).skip(num).limit(len).get().then(res => {
      // console.log(res.data)
      let arr = res.data;
      this.setData({
        product: this.data.product.concat(arr)
      })
      wx.hideToast();
    })
  },
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log("来自页面内转发按钮");
      console.log(res.target);
    } else {
      console.log("来自右上角转发菜单")
    }
    return {
      title: '分享给更多的朋友吧',
      path: '/pages/wine/wine',
      success: function(res) {
        wx.showToast({
          title: '转发成功',
        })
      }
    }
  },
  onShow() {
    this.getUser();
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
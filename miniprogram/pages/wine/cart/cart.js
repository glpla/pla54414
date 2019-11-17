const db = wx.cloud.database();
Page({
  data: {
    showToTop: false,
    order: [],
    sum: 0,
    openid: ''
  },
  onCopy() {
    wx.setClipboardData({
      data: this.data.openid,
      success(res) {
        wx.showToast({
          title: '订单号已复制',
        })
      }
    })
  },
  onLoad: function(options) {
    wx.showToast({
      title: '数据加载中',
    })
    db.collection('pla54414-wine-order').where({
      _openid: options.openid,
      flag: false,
    }).get().then(res => {
      console.log(res);
      let order = res.data;
      let p = 0;
      for (let i = 0; i < order.length; i++) {
        p += order[i].num * order[i].price;
      }
      this.setData({
        openid: options.openid,
        sum: p,
        order
      })
    })
  },
  onDone() {
    wx.showToast({
      title: '系统维护中...',
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
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
})
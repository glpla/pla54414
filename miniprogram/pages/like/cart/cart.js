Page({
  data: {
    orders: [],
    sum: 0,
    test: 100
  },
  onLoad: function(options) {
    this.setData({
      orders: JSON.parse(options.orders)
    })
    let p = 0;
    for (let i = 0; i < this.data.orders.length; i++) {
      p += this.data.orders[i].num * this.data.orders[i].price;
    }
    this.setData({
      sum: p
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
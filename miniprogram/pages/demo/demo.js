// pages/product/product.js
Page({
  data: {
    cIndex: 0,
    list: [{
      id: 900,
      title: 'layout'
    }, {
      id: 901,
      title: 'transform'
    }, {
      id: 902,
      title: 'animation'
    }, {
      id: 903,
      title: 'transition'
    }, {
      id: 904,
      title: 'iconfont'
    }, {
      id: 905,
      title: 'echart'
    }, {
      id: 906,
      title: 'effect'
    }]
  },
  onSel(e) {
    this.setData({
      cIndex: e.currentTarget.dataset.idx
    })
  },
  onChange(e) {
    this.setData({
      cIndex: e.detail.current
    })
  },
  onLoad: function(options) {}
})
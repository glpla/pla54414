Page({
  data: {
    address: [],
    isAdded: false,
    name: '',
    cell: '',
    region: ['省', '市', '区'],
    isRegion: false,
    detail: ''
  },
  onAddress() {
    this.setData({
      isAdded: true
    })
  },
  onConfirm() {
    this.setData({
      isAdded: false
    })
  },
  onCancel() {
    this.setData({
      isAdded: false
    })
  },
  bindRegionChange: function(e) {
    this.setData({
      region: e.detail.value,
      isRegion: true
    })
  },
  onLoad: function(options) {

  },
  onReady: function() {},
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
})
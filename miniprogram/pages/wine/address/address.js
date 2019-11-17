Page({
  data: {
    showToTop: false,
    address: [{
      _id: 7005,
      name: 'glpla',
      cell: '13707735481',
      addr: '广西桂林象山区崇善路32号陆军特种作战学院',
      flag: true
    }, {
      _id: 7006,
      name: '大树',
      cell: '18323185912',
      addr: '广西桂林秀峰区巾山路1号通信大队',
      flag: false
    }, {
      _id: 7007,
      name: 'cnplaman',
      cell: '16637256108',
      addr: '广州天河区林河街道禺东西路38号军体院15队',
      flag: false
    }],
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
  onDel(e) {
    this.data.address.splice(e.currentTarget.dataset.idx, 1);
    console.log(this.data.address)
    this.setData({
      address: this.data.address
    })
  },
  onName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  onCell(e) {
    this.setData({
      cell: e.detail.value
    })
  },
  onDetail(e) {
    this.setData({
      detail: e.detail.value
    })
  },
  onConfirm() {
    let tmp = {
      _id: String(Math.random() * 100000).substr(0, 5),
      name: this.data.name,
      cell: this.data.cell,
      addr: this.data.region + this.data.detail,
      flag: false
    }
    this.data.address.push(tmp);
    console.log(tmp);
    this.setData({
      address: this.data.address,
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
  onLoad: function(options) {},
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
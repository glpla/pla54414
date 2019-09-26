Component({

  properties: {},


  data: {},


  methods: {
    toMsg() {
      wx.navigateTo({
        url: '../msg/msg',
      })
    },
    toProduct() {
      wx.navigateTo({
        url: '../product/product',
      })
    }
  }
})
Component({
  properties: {},
  data: {},
  methods: {
    toPic() {
      wx.navigateTo({
        url: '../pic/pic',
      })
    },
    toMsg() {
      wx.navigateTo({
        url: '../message/message',
      })

    },
    toGym() {
      wx.navigateTo({
        url: '../gym/gym',
      })
    },
    toAgenda() {
      wx.navigateTo({
        url: '../agenda/agenda',
      })
    },
    toOffice() {
      wx.navigateTo({
        url: '../office/office',
      })
    },
    toLike() {
      wx.navigateTo({
        url: '../like/like',
      })
    },
    toMap() {
      wx.navigateTo({
        url: '../map/map',
      })
    },
    toDemo() {
      wx.navigateTo({
        url: '../demo/demo',
      })
    },
    toAdmin() {
      wx.navigateTo({
        url: '../admin/admin',
      })
    }
  },
  lifetimes: {
    attached: function() {},
    detached: function() {}
  }
})
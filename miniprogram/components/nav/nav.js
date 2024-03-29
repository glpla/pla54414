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
    toDairy() {
      wx.navigateTo({
        url: '../dairy/dairy',
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
    toWine() {
      wx.navigateTo({
        url: '../wine/wine',
      })
    },
    toDemo() {
      wx.navigateTo({
        url: '../demo/demo',
      })
    },
    toCalendar() {
      wx.navigateTo({
        url: '../calendar/calendar',
      })
    },
    toQuiz() {
      wx.navigateTo({
        url: '../quiz/quiz',
      })
    }
  },
  lifetimes: {
    attached: function() {},
    detached: function() {}
  }
})
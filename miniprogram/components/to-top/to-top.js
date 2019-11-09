Component({
  properties: {
    color: {
      type: String,
      value: '#179cd1'
    },
    show: {
      type: Boolean,
      value: false
    }
  },
  data: {
    showToTop: false
  },
  methods: {
    onTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
})
Component({
  properties: {
    likes: {
      type: Array,
      value: ''
    }
  },
  data: {
    cIndex: 0
  },
  methods: {
    onSel(e) {
      this.setData({
        cIndex: e.currentTarget.dataset.idx
      })
    },
  }
})
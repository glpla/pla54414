Component({
  properties: {
    likes: {
      type: Array,
      value: ''
    }
  },
  data: {
    cIndex: 0,
    cTitle: 'hot sale'
  },
  methods: {
    onSel(e) {
      this.setData({
        cIndex: e.currentTarget.dataset.idx,
        cTitle: e.currentTarget.dataset.title
      })
    },
  }
})
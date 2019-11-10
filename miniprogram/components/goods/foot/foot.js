Component({
  properties: {
    len: {
      type: Number,
      value: 0
    }
  },
  data: {},
  methods: {
    onNav(e) {
      let ind = e.currentTarget.dataset.idx;
      this.triggerEvent('nav', ind);
    }
  }
})
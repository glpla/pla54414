Component({
  properties: {},
  data: {},
  methods: {
    onNav(e) {
      let ind = e.currentTarget.dataset.idx;
      this.triggerEvent('nav', ind);
    }
  }
})
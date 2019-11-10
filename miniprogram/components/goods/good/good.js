Component({
  properties: {
    good: {
      type: Object,
      value: {}
    }
  },
  data: {
    num: 0
  },
  methods: {
    numUpdate(e) {
      this.setData({
        num: e.detail.value
      })
      this.triggerEvent('numInput', {
        num: num
      })
    },
    onSubtract() {
      let num = this.data.num;
      num--;
      this.setData({
        num
      })
      this.triggerEvent('subtract', {
        num: num
      })
    },
    onAdd() {
      let num = this.data.num;
      num++;
      this.setData({
        num
      })
      this.triggerEvent('add', {
        num: num
      })
    }
  }
})
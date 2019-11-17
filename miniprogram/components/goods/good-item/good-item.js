Component({
  properties: {
    good: {
      type: Object,
      value: {}
    }
  },
  data: {
    newNum: 0,
    newPrice: 0,
  },
  methods: {
    onNum(e) {
      this.setData({
        newNum: e.detail.value
      })
    },
    onPrice(e) {
      this.setData({
        newPrice: e.detail.value
      })
    },
    onConfirm(e) {
      let num = e.currentTarget.dataset.num;
      let price = e.currentTarget.dataset.price;
      let idx = e.currentTarget.dataset.idx;
      let tmp = {
        idx,
        num,
        price
      };
      if (this.data.newNum != 0 && this.data.newNum != num) {
        tmp.num = this.data.newNum
      }
      if (this.data.newPrice != 0 && this.data.newPrice != price) {
        tmp.price = this.data.newPrice
      }
      this.triggerEvent('update', tmp);
    }
  },
  lifetimes: {
    attached: function() {
      this.setData({
        newNum: this.data.good.num,
        newPrice: this.data.good.price
      })
    }
  }
})
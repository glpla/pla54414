const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    imgs: [],
    cIndex: 0,
    radio0: 0,
    radio1: 0,
    radio2: 0,
    radio3: 0,
    radio4: 0,
    score: 0

  },
  onClose() {
    this.setData({
      cIndex: 0,
      score: 0
    })
  },
  onStart() {
    this.setData({
      cIndex: 300
    })
  },
  onChange(e) {
    let ind = e.currentTarget.dataset.ind;
    let value = e.detail.value
    this.setData({
      ['radio' + ind]: value
    });
  },
  onNext() {
    console.log(this.data.radio0)
    let idx = this.data.cIndex;
    idx++
    this.setData({
      cIndex: idx
    })
  },
  onSubmit() {
    let sum = Number(this.data.radio0) + Number(this.data.radio1) + Number(this.data.radio2) + Number(this.data.radio3) + Number(this.data.radio4);
    this.setData({
      cIndex: 900,
      score: sum
    })
  },
  onBack() {
    this.setData({
      cIndex: 0,
      score: 0
    })
  },
  onLoad: function(options) {
    db.collection('pla54414-gym').orderBy('time', 'desc').limit(10).get().then(res => {
      // console.log(res.data)
      this.setData({
        imgs: res.data
      })
    })
  }
})
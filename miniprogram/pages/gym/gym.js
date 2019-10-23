const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    imgs: [],
    cIndex: -1,
    radio: [],
    score: 0,
    quiz: [],
    isStart: false

  },
  onClose() {
    this.setData({
      cIndex: -1,
      radio: [],
      score: 0,
      isStart: false
    })
  },
  onStart() {
    db.collection('pla54414-gym-quiz').get().then(res => {
      // console.log(res.data)
      this.setData({
        quiz: res.data,
        isStart: true,
        cIndex: 0
      })
    })
  },
  onChange(e) {
    let ind = e.currentTarget.dataset.ind;
    let value = e.detail.value;
    let newValue = 'radio[' + ind + ']';
    this.setData({
      [newValue]: value
    });
  },
  onIndex(e) {
    // console.log(e.currentTarget.dataset.ind)
    this.setData({
      cIndex: e.currentTarget.dataset.ind
    })
  },
  onSubmit() {
    let sum = 0;
    for (let i = 0; i < this.data.radio.length; i++) {
      sum += Number(this.data.radio[i])
    }
    // console.log(sum)
    this.setData({
      cIndex: 900,
      score: sum
    })
  },
  onBack() {
    this.setData({
      cIndex: -1,
      score: 0,
      radio: [],
      isStart: false
    })
  },
  onLoad: function(options) {
    wx.showToast({
      title: '数据加载中',
    })
    db.collection('pla54414-gym').orderBy('time', 'desc').limit(10).get().then(res => {
      // console.log(res.data)
      this.setData({
        imgs: res.data
      })
      wx.hideToast();
    })
  }
})
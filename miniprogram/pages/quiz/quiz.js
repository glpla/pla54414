const app = getApp()
const db = wx.cloud.database();
Page({
  data: {
    openid: '',
    quiz: [],
    result: []
  },
  onLoad: function() {
    db.collection('lt-quiz').get().then(res => {
      console.log(res)
      this.setData({
        quiz: res.data
      })
    })
    wx.cloud.callFunction({
      name: 'login',
      data: {}
    }).then(res => {
      console.log(res.result.openid);
      this.setData({
        openid: res.result.openid
      })
    })
  },
  onChange(e) {
    let ind = e.currentTarget.dataset.ind;
    let value = e.detail.value;
    console.log(ind, value)
    let newValue = 'result[' + ind + ']';
    this.setData({
      [newValue]: value
    });
  },
  res() {
    db.collection('lt-quiz-res').where({
      _openid: this.data.openid
    }).get().then(res => {
      console.log(res.data.length)
      let len = res.data.length;
      if (res.data.length > 0) {
        wx.showToast({
          title: '您已提交,谢谢参与',
        })
        return;
      } else {
        this.saveRes()
      }
    })
  },
  saveRes() {
    let res = this.data.result;
    db.collection('lt-quiz-res').add({
      data: {
        res,
        ct: db.serverDate()
      }
    }).then(res => {
      wx.redirectTo({
        url: './ack/ack',
      })
    })
  }
})
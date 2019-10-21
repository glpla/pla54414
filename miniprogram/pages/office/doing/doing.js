import {
  formatTime
} from '../../../utils/util.js'
const db = wx.cloud.database();
Page({
  data: {
    id: '',
    item: null,
    response: ''
  },
  onResInput(e) {
    this.setData({
      response: e.detail.value
    })
    console.log(e.detail.value)
  },
  onRes(e) {
    if (!this.data.response) {
      wx.showToast({
        title: '意见为空',
      })
      return;
    }

    let res = e.currentTarget.dataset.res;
    let tar = 'res' + res;
    let time = formatTime(new Date()).substring(0, 16);
    let tarC = ['res' + res]['cont'];
    let tarT = tar['time'];
    db.collection('pla54414-office').doc(this.data.id).update({
      data: {
        [tar]: {
          time: time,
          cont: this.data.response
        },
        flag: db.command.inc(1)
      }
    }).then(res => {
      wx.showToast({
        title: '签署完毕',
      })
      wx.navigateTo({
        url: '../../office/office',
      })
    })
  },
  onLoad: function(options) {
    db.collection('pla54414-office').doc(options.id).get().then(res => {
      this.setData({
        item: res.data,
        id: options.id
      })
    })
  }
})
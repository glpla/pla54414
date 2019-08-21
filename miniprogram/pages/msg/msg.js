const util = require('../../utils/util.js');
const db = wx.cloud.database()
Page({
  data: {
    name: "",
    msg: "",
    maxLen: 60,
    len: 60,
    records: []
  },
  onNameInput(e) {
    this.setData({
      name: e.detail.value
    })
  },
  onMsgInput(e) {
    let msg = e.detail.value,
      len = this.data.maxLen - msg.length
    console.log(len);
    this.setData({
      msg,
      len
    })
  },
  onSbumit() {
    db.collection('pla54414').add({
        data: {
          time: util.formatTime(new Date()),
          name: this.data.name,
          msg: this.data.msg,
          like: 0
        }
      })
      .then(res => {
        wx.showToast({
          title: '成功',
        })
      }).catch(err => {
        console.log(err)
      })

  },
  onQuery() {
    wx.showToast({
      title: '加载中',
    })
    db.collection('pla54414').orderBy('time', 'desc').get().then(res => {
      console.log(res.data)
      this.setData({
        records: res.data
      })
      wx.hideToast();
      wx.showToast({
        title: '加载完毕',
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onLike(e) {
    let idx = e.currentTarget.dataset.idx,
      id = e.currentTarget.dataset.id,
      records = this.data.records,
      tmp = records[idx],
      time = tmp.time,
      like = tmp.like;
    like++;
    tmp.like = like;
    this.setData({
      records
    })
    wx.cloud.callFunction({
      name: 'like',
      data: {
        _id: id,
        like: like
      },
      success: res => {
        wx.showToast({
          title: '点赞成功',
        })
      }

    })

    // db.collection('pla54414').doc(id).update({
    //   data: {
    //     like: like
    //   }
    // }).then(res => {

    // }).catch(err => {
    //   wx.showToast({
    //     title: '点赞失败',
    //   })
    // })
  },
  onLoad: function(options) {}
})
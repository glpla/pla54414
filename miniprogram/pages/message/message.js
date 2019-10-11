import {
  formatTime
} from '../../utils/util.js'
import {
  config
} from '../../utils/config.js'

const app = getApp();
const db = wx.cloud.database();
Page({
  data: {
    msg: "",
    len: 60,
    inter: 0,
    records: [],
    userName: '大树爱你哦',
    userContact: '18888888888'
  },
  makeCall() {
    wx.makePhoneCall({
      phoneNumber: '13707735481'
    })
  },
  onUser(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  onContact(e) {
    this.setData({
      userContact: e.detail.value
    })
  },
  onMsgInput(e) {
    this.setData({
      msg: e.detail.value
    })
  },
  onSubmit() {
    if (!app.globalData.isEdit) {
      wx.showToast({
        title: '请勿频繁提交',
      })
      return
    }
    if (this.data.msg.length == 0) {
      wx.showToast({
        title: '说点啥嘛',
      })
      return
    }

    wx.showToast({
      title: '数据提交中...',
      icon: "loading"
    })
    this.saveData();

  },
  saveData() {
    db.collection('pla54414-msg').add({
        data: {
          time: formatTime(new Date()),
          userName: this.data.userName,
          userContact: this.data.userContact,
          msg: this.data.msg
        }
      })
      .then(res => {
        wx.showToast({
          title: '提交成功',
          icon: "none"
        })
        this.onQuery();
        app.globalData.isEdit = false;
        this.data.inter = setTimeout(() => {
          app.globalData.isEdit = true;
        }, 5 * 60 * 1000)
        this.setData({
          msg: ''
        })
      }).catch(err => {
        console.log(err)
      })
  },
  onQuery() {
    db.collection('pla54414-msg').orderBy('time', 'desc').get().then(res => {
      // console.log(res.data)
      this.setData({
        records: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  },
  onLoad: function(options) {
    this.onQuery();
  }
})
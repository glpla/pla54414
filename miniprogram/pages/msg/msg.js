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
    isSelf: false,
    userName: null
  },
  makeCall() {
    wx.makePhoneCall({
      phoneNumber: '13707735481'
    })
  },
  onMsgInput(e) {
    let msg = e.detail.value,
      len = config.max_input_len - msg.length
    // console.log(len);
    this.setData({
      msg,
      len
    })
  },
  onSubmit() {
    if (!this.data.userName) {
      wx.showModal({
        title: '提示',
        content: '需要授权才能使用留言功能,是否继续?',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login',
            })
          } else if (res.cancel) {
            wx.showToast({
              title: '您取消了授权!',
            })
          }
        }
      })
    } else {
      if (!app.globalData.isEdit) {
        wx.showToast({
          title: '请勿频繁提交',
          icon: "none"
        })
        return
      }
      if (this.data.msg.length == 0) {
        wx.showToast({
          title: '内容为空',
          icon: "none"
        })
        return
      }

      wx.showToast({
        title: '数据提交中...',
        icon: "loading"
      })
      db.collection('pla54414').add({
          data: {
            time: formatTime(new Date()),
            userName: this.data.userName,
            msg: this.data.msg,
            userPic: app.globalData.userPic,
            city: app.globalData.city,
            province: app.globalData.province,
            like: 0,
            likes: [],
            comments: []
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
    }

  },
  onQuery() {
    db.collection('pla54414').orderBy('time', 'desc').get().then(res => {
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
    this.setData({
      isSelf: app.globalData.self,
      userName: app.globalData.userName
    })
  }
})
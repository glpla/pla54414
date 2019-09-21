import {
  formatTime
} from '../../utils/util.js'
import {
  config
} from '../../utils/config.js'

const app = getApp()
const db = wx.cloud.database()

Page({
  data: {
    msg: "",
    len: 60,
    records: [],
    isEdit: true,
    isSelf: false
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
    if (!app.globalData.isEdit) {
      wx.showToast({
        title: '请稍后再试',
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
          userInfo: app.globalData.userInfo,
          msg: this.data.msg,
          city: app.globalData.city,
          province: app.globalData.province,
          like: 0
        }
      })
      .then(res => {
        wx.showToast({
          title: '提交成功',
          icon: "none"
        })
        this.onQuery();
        app.globalData.isEdit = false;
        this.setTimeOut(() => {
          app.globalData.isEdit = true;
        }, 5 * 60 * 1000)
      }).catch(err => {
        console.log(err)
      })
  },
  onQuery() {
    wx.showToast({
      title: '数据加载中...',
      icon: "loading"
    })
    db.collection('pla54414').orderBy('time', 'desc').get().then(res => {
      // console.log(res.data)
      this.setData({
        records: res.data
      })
      // console.log(this.data.records)
      wx.hideToast();
      wx.showToast({
        title: '数据加载完毕',
        icon: "none"
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
    console.log(idx, tmp)
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
          icon: "none"
        })
      },
      fail: console.error
    })
  },
  onDel(e) {
    console.log(e, e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    const db = wx.cloud.database()
    db.collection('pla54414').doc(id).remove({
      success: res => {
        wx.showToast({
          title: '删除成功',
        })
        this.onQuery();
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '删除失败',
        })
        console.error('[数据库] [删除记录] 失败：', err)
      }
    })
  },
  onLoad: function(options) {
    this.onQuery();
    // console.log(app.globalData.openid);
    // console.log(app.globalData.userid);
    // console.log(app.globalData.self);
    this.setData({
      isSelf: app.globalData.self
    })
    console.log(app.globalData.self);
  }
})
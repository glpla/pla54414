import {
  formatTime
} from '../../utils/util.js'
const db = wx.cloud.database();
const app = getApp();
Page({
  data: {
    openid: '',
    user: null,
    name: '',
    pass: '',
    tempPass: '',
    birth: '',
    cell: '',
    addr: '',
    reco: '',
    credit: 0,
    vip: 3,
    focus: null
  },
  onFocus(e) {
    this.setData({
      focus: e.currentTarget.dataset.idx
    })
  },
  onName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  onPass(e) {
    this.setData({
      pass: e.detail.value
    })
  },
  onConfirm(e) {
    this.setData({
      tempPass: e.detail.value
    })
  },
  onBirth(e) {
    this.setData({
      birth: e.detail.value
    })
  },
  onCell(e) {
    this.setData({
      cell: e.detail.value
    })
  },
  onAddr(e) {
    this.setData({
      addr: e.detail.value
    })
  },
  onReco(e) {
    this.setData({
      reco: e.detail.value
    })
  },
  onReg() {
    if (!this.data.name.replace(/ /g, '')) {
      wx.showToast({
        title: '用户名为空',
      })
      return;
    }
    if (!this.data.pass.replace(/ /g, '')) {
      wx.showToast({
        title: '密码为空',
      })
      return;
    }
    if (this.data.pass != this.data.tempPass) {
      wx.showToast({
        title: '俩次密码不一致',
      })
      return;
    }
    if (!this.data.birth.replace(/ /g, '')) {
      wx.showToast({
        title: '生日为空',
      })
      return;
    }
    if (!this.data.cell.replace(/ /g, '')) {
      wx.showToast({
        title: '电话为空',
      })
      return;
    }
    if (!this.data.addr.replace(/ /g, '')) {
      wx.showToast({
        title: '电话为空',
      })
      return;
    }
    this.saveData();
  },
  saveData() {
    wx.cloud.callFunction({
      name: 'user-reg',
      data: {
        openid: this.data.openid,
        regTime: formatTime(new Date()),
        user: this.data.user,
        name: this.data.name,
        pass: this.data.pass,
        addr: this.data.addr,
        cell: this.data.cell,
        birth: this.data.birth,
        reco: this.data.reco,
        credit: this.data.credit,
        vip: this.data.vip,
        other: ''
      }
    }).then(res => {
      console.log(res)
      wx.showModal({
        title: '提示',
        content: '信息保存成功',
        showCancel: false,
        success: res => {
          if (res.confirm) {
            wx.redirectTo({
              url: '../wine/user/user',
            })
          }
        }
      })
    })
  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      openid: options.openid,
      user: JSON.parse(options.user)
    })
  }
})
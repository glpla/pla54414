import {
  Demo
} from '../../utils/demo.js'
// 实例化类
let oKey = new Demo();
let QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
// 实例化API核心类

let qqmapsdk = new QQMapWX({
  key: 'U6QBZ-ROQ3W-PFMRZ-O4VA5-LZOKQ-G7FZA'
});
const app = getApp();
const db = wx.cloud.database();

Page({
  data: {
    wxPic: '../../images/wx.png',
    userName: '',
    userPass: '',
    isLocation: true
  },
  onHint() {
    wx.showToast({
      title: '8位字母或数字',
    })
  },
  onName(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  onPass(e) {
    this.setData({
      userPass: e.detail.value
    })
  },
  onLogin() {
    if (!this.data.userName) {
      wx.showToast({
        title: '用户名为空',
      })
      return;
    }
    if (!this.data.userPass) {
      wx.showToast({
        title: '密码为空',
      })
      return;
    }
    db.collection('pla54414-users').get().then(res => {
      let users = res.data;
      let bool = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].userName == this.data.userName && users[i].userPass == this.data.userPass) {
          app.globalData.userName = users[i].userName;
          app.globalData.userPass = users[i].userPass;
          app.globalData.userPic = users[i].userPic;
          bool = true;
          break;
        }
      }
      if (bool) {
        wx.redirectTo({
          url: '../msg/msg'
        })
      } else {
        wx.showToast({
          title: '用户名或密码不正确',
        })
      }
    })


  },
  onReg() {
    wx.redirectTo({
      url: '../reg/reg',
    })
  },
  checkboxChange: function(e) {
    wx.getLocation({
      type: 'wgs84',
      success: res => {
        // 调用sdk接口
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            //获取当前地址成功
            // console.log(res);
            app.globalData.city = res.result.address_component.city;
            app.globalData.province = res.result.address_component.province;
            app.globalData.isLocation = this.data.isLocation;
          },
          fail: res => {
            console.log('获取当前地址失败');
          }
        });
      },
    })
  },
  onLoad: function(options) {},
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      console.log(e.detail.userInfo);
      this.setData({
        userPic: e.detail.userInfo.avatarUrl,
        userName: e.detail.userInfo.nickName
      })
      app.globalData.userName = e.detail.userInfo.nickName;
      app.globalData.userPic = e.detail.userInfo.avatarUrl;
      wx.redirectTo({
        url: '../msg/msg',
      })
    }
  },
  onReady: function() {}
})
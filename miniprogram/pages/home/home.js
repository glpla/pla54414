// 获取自定义的类, 只能是相对路径啊.草!!!
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

const app = getApp()

Page({
  data: {},

  onGetUserInfo: function(e) {
    console.log(e)
    if (!this.logged && e.detail.userInfo) {
      app.globalData.logged = true;
      app.globalData.userInfo = e.detail.userInfo;
      wx.redirectTo({
        url: '../index/index',
      })
    }
  },
  onLoad: function(options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            lang: "zh_CN",
            success: res => {
              console.log(res.userInfo)
              app.globalData.userInfo = res.userInfo;
            }
          })
        }
      }
    })
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
          },
          fail: res => {
            console.log('获取当前地址失败');
          }
        });
      },
    })
  },


  onReady: function() {},


  onShow: function() {},


  onHide: function() {},


  onUnload: function() {},


  onPullDownRefresh: function() {},


  onReachBottom: function() {},

  onShareAppMessage: function() {}
})
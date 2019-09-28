const app = getApp()

const util = require('../../utils/util.js');

const db = wx.cloud.database();

let QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
let qqmapsdk = new QQMapWX({
  key: 'U6QBZ-ROQ3W-PFMRZ-O4VA5-LZOKQ-G7FZA'
});

Component({
  properties: {},
  data: {
    info: [],
    isSelf: false
  },
  methods: {
    checkLocation() {
      qqmapsdk.geocoder({
        address: "广西桂林七星区高新万达广场",
        success(res) {
          wx.openLocation({
            latitude: res.result.location.lat,
            longitude: res.result.location.lng
          })
        }
      })

    },
    makeCall() {
      wx.makePhoneCall({
        phoneNumber: '13707735481'
      })
    },
    toMsg() {
      wx.navigateTo({
        url: '../msg/msg',
      })
    },
    onQuery() {
      wx.showToast({
        title: '数据加载中',
        icon: "loading"
      })
      db.collection('pla54414-info').get().then(res => {
        // console.log(res.data);
        this.setData({
          info: res.data
        })
        // console.log(this.data.records);
        wx.hideToast();
        wx.showToast({
          title: '数据加载完毕',
          icon: "none"
        })
      }).catch(err => {
        console.log(err)
      })
    },
    getFile() {
      wx.cloud.downloadFile({
        fileID: 'cloud://glpla-54414.676c-glpla-54414-1259726622/resume.doc',
        success: res => {
          console.log('get ok');
          console.log(res.tempFilePath);
          const downFile = res.tempFilePath;
          wx.openDocument({
            filePath: downFile,
          })
        },
        fail: console.error
      })
    },
    upFile(e) {
      wx.chooseMessageFile({
        count: 1,
        type: 'file',
        success(res) {
          // console.log(res.tempFiles[0].path);
          const tempFilePaths = res.tempFiles[0].path;
          wx.cloud.uploadFile({
            cloudPath: 'resume.doc',
            filePath: tempFilePaths,
            success: res => {
              console.log('上传成功', res)
            }
          })
        },
        fail(err) {
          console.log(err);
        }
      })
    }
  },
  lifetimes: {
    attached: function() {
      this.onQuery();
      this.setData({
        isSelf: app.globalData.self
      })
    },
    detached: function() {}
  }
})
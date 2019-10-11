const app = getApp();
const db = wx.cloud.database();
Component({
  properties: {},
  data: {
    imgs: []
  },
  methods: {},
  lifetimes: {
    attached: function() {
      db.collection('pla54414-swiper').get().then(res => {
        console.log(res.data)
        let len = res.data.length;
        this.setData({
          imgs: res.data[len - 1].fileID
        })
      })
    },
    detached: function() {}
  }
})
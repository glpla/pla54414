const db = wx.cloud.database();
Page({
  data: {
    date: '2019-10-12',
    time: '09:00',
    client: '',
    target: '',
    event: '',
    staff: '',
    events: [],
    navItem: [{
      id: 100,
      title: "登记",
      desc: 'Todo'
    }, {
      id: 101,
      title: "待办",
      desc: 'Todo'
    }, {
      id: 102,
      title: "处理中",
      desc: 'Doing'
    }, {
      id: 103,
      title: "完结",
      desc: 'Done'
    }, {
      id: 104,
      title: "所有",
      desc: 'All'
    }, ],
    navIndex: 0
  },

  onNav(e) {
    this.setData({
      navIndex: e.currentTarget.dataset.idx
    })
    switch (this.data.navIndex) {
      case 0:
        break;
      default:
        this.getEvents(this.data.navIndex);
        break;
    }
  },
  getEvents(flag) {
    db.collection('pla54414-events').get().then(res => {
      console.log(res)
      this.setData({
        events: res.data
      })
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  onClient(e) {
    this.setData({
      client: e.detail.value
    })
  },
  onTarget(e) {
    this.setData({
      target: e.detail.value
    })
  },
  onEvent(e) {
    this.setData({
      event: e.detail.value
    })
  },
  onStaff(e) {
    this.setData({
      staff: e.detail.value
    })
  },
  onSubmit() {
    if (!this.data.client) {
      wx.showToast({
        title: '客户为空',
      })
      return;
    }
    if (!this.data.target) {
      wx.showToast({
        title: '投诉对象为空',
      })
      return;
    }
    if (!this.data.event) {
      wx.showToast({
        title: '事由为空',
      })
      return;
    }
    if (!this.data.staff) {
      wx.showToast({
        title: '经办人为空',
      })
      return;
    }
    db.collection('pla54414-events').add({
      data: {
        date: this.data.date,
        time: this.data.time,
        client: this.data.client,
        target: this.data.target,
        event: this.data.event,
        staff: this.data.staff,
        flag: 1,
        "部门主管": '',
        "部门主任": '',
        "中心主任": '',
        "校长": ''
      }
    }).then(res => {
      wx.showToast({
        title: '提交成功',
        icon: "none"
      })
      this.setData({
        client: '',
        target: '',
        event: '',
        staff: ''
      })
    })
  },
  onDetail(e) {
    wx.navigateTo({
      url: '../events/events?id=' + e.currentTarget.dataset.idx,
    })
  },
  onLoad: function(options) {}
})
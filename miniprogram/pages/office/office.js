const db = wx.cloud.database();
Page({
  data: {
    navIndex: 0,
    events: [],
    len: 15,
    page: 0,
    pages: 0,
    total: 0,
    date: '2019-10-12',
    time: '09:00',
    client: '',
    target: '',
    event: '',
    staff: '',
    flagArr: ['待办', '处理中', '处理中', '处理中', '完结']
  },
  onCheck() {
    this.setData({
      navIndex: 0
    })
  },
  onTodo() {
    wx.showToast({
      title: '数据加载中',
    })
    this.setData({
      navIndex: 1
    })
    wx.cloud.callFunction({
      name: 'sql',
      data: {
        ind: 'todo'
      }
    }).then(res => {
      console.log(res.result)
      this.setData({
        events: res.result.data
      })
      wx.hideToast();
    })
  },
  onDoing() {
    wx.showToast({
      title: '数据加载中',
    })
    this.setData({
      navIndex: 2
    })
    wx.cloud.callFunction({
      name: 'sql',
      data: {
        ind: 'doing'
      }
    }).then(res => {
      console.log(res.result)
      this.setData({
        events: res.result.data
      })
      wx.hideToast();
    })
  },
  onDone() {
    wx.showToast({
      title: '数据加载中',
    })
    this.setData({
      navIndex: 3
    })
    wx.cloud.callFunction({
      name: 'sql',
      data: {
        ind: 'done'
      }
    }).then(res => {
      console.log(res.result)
      this.setData({
        events: res.result.data
      })
      wx.hideToast();
    })
  },
  onAll() {
    wx.showToast({
      title: '数据加载中',
    })
    this.setData({
      navIndex: 4
    })
    wx.cloud.callFunction({
      name: 'sql',
      data: {
        ind: 'all'
      }
    }).then(res => {
      console.log(res.result)
      this.setData({
        events: res.result.data
      })
      wx.hideToast();
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
    db.collection('pla54414-office').add({
      data: {
        date: this.data.date,
        time: this.data.time,
        client: this.data.client,
        target: this.data.target,
        event: this.data.event,
        staff: this.data.staff,
        flag: 0,
        res0: {},
        res1: {},
        res2: {},
        res3: {}
      }
    }).then(res => {
      this.setData({
        client: '',
        target: '',
        event: '',
        staff: ''
      }, res => {
        wx.showToast({
          title: '提交成功',
          icon: "none"
        })
      })
    })
  },
  // onPage(e) {
  //   let page = e.currentTarget.dataset.ind;
  //   let len = this.data.len;
  //   this.setData({
  //     page: page
  //   })
  //   db.collection('pla54414-office').skip(page * len).limit(len).get().then(res => {
  //     this.setData({
  //       events: res.data
  //     })
  //   })
  // },  
  onDetail(e) {
    switch (e.currentTarget.dataset.flag) {
      case 0:
        wx.navigateTo({
          url: './todo/todo?id=' + e.currentTarget.dataset.idx,
        })
        break;
      case 4:
        wx.navigateTo({
          url: './done/done?id=' + e.currentTarget.dataset.idx,
        })
        break;
      default:
        wx.navigateTo({
          url: './doing/doing?id=' + e.currentTarget.dataset.idx,
        })
        break;
    }
  },
  onLoad: function(options) {}
})
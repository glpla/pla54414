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
    staff: ''
  },
  onCheck() {
    this.setData({
      navIndex: 0
    })
  },
  onTodo() {
    this.setData({
      navIndex: 1
    })
    wx.cloud.callFunction({
      name: 'total'
    }).then(res => {
      let total = res.result.total;
      let pages = Math.ceil(total / this.data.len);
      console.log(total, pages);
      this.setData({
        total: total,
        pages: pages
      })
    })
    db.collection('pla54414-office').skip(this.data.page * this.data.len).limit(this.data.len).get().then(res => {
      // console.log(res)
      this.setData({
        events: res.data
      })
    })
  },
  onDoing() {
    this.setData({
      navIndex: 2
    })
  },
  onDone() {
    this.setData({
      navIndex: 3
    })
  },
  onAll() {
    this.setData({
      navIndex: 4
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
        "部门主管": '',
        "部门主任": '',
        "中心主任": '',
        "校长": ''
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
  onPage(e) {
    let page = e.currentTarget.dataset.ind;
    let len = this.data.len;
    this.setData({
      page: page
    })
    db.collection('pla54414-office').skip(page * len).limit(len).get().then(res => {
      this.setData({
        events: res.data
      })
    })
  },
  onDetail(e) {
    wx.navigateTo({
      url: './detail/detail?id=' + e.currentTarget.dataset.idx,
    })
  },
  onLoad: function(options) {}
})
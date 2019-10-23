Component({
  properties: {},
  data: {
    monthArr: [{
      ch: '一月',
      en: 'January'
    }, {
      ch: '二月',
      en: 'February'
    }, {
      ch: '三月',
      en: 'March'
    }, {
      ch: '四月',
      en: 'April'
    }, {
      ch: '五月',
      en: 'May'
    }, {
      ch: '六月',
      en: 'June'
    }, {
      ch: '七月',
      en: 'July'
    }, {
      ch: '八月',
      en: 'August'
    }, {
      ch: '九月',
      en: 'September'
    }, {
      ch: '十月',
      en: 'October'
    }, {
      ch: '十一月',
      en: 'November'
    }, {
      ch: '十二月',
      en: 'December'
    }],
    weekArr: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    indexUrl: 0,
    indexYear: 0,
    indexMonth: 0,
    curYear: 0,
    curMonth: 0,
    curDate: 0,
    dayBegin: 0,
    dayTotal: 0
  },
  methods: {
    onMonDec() {
      let indexMonth = this.data.indexMonth;
      if (indexMonth > 0) {
        indexMonth--;
      } else {
        indexMonth = 11;
      }
      this.setData({
        indexMonth,
        dayBegin: this._getDayBegin(this.data.indexYear, indexMonth),
        dayTotal: this._getDayTotal(this.data.indexYear, indexMonth)
      })
    },
    onMonInc() {
      let indexMonth = this.data.indexMonth;
      if (indexMonth < 11) {
        indexMonth++;
      } else {
        indexMonth = 0;
      }
      this.setData({
        indexMonth,
        dayBegin: this._getDayBegin(this.data.indexYear, indexMonth),
        dayTotal: this._getDayTotal(this.data.indexYear, indexMonth)
      })
    },
    onYearDec() {
      let indexUrl = this.data.indexUrl;
      let indexYear = this.data.indexYear;
      indexYear--;
      this.setData({
        indexYear,
        dayBegin: this._getDayBegin(indexYear, this.data.indexMonth),
        dayTotal: this._getDayTotal(indexYear, this.data.indexMonth),
        indexUrl: (indexYear % 12 + 8) % 12
      })
    },
    onYearInc() {
      let indexUrl = this.data.indexUrl;
      let indexYear = this.data.indexYear;
      indexYear++;
      this.setData({
        indexYear,
        dayBegin: this._getDayBegin(indexYear, this.data.indexMonth),
        dayTotal: this._getDayTotal(indexYear, this.data.indexMonth),
        indexUrl: (indexYear % 12 + 8) % 12
      })
    },
    onDay(e) {
      console.log(e.currentTarget.dataset);
    },
    getCurDate() {
      let date = new Date();
      let yy = date.getFullYear();
      let mm = date.getMonth();
      let dd = date.getDate();
      this.setData({
        indexYear: yy,
        indexMonth: mm,
        curYear: yy,
        curMonth: mm,
        curDate: dd,
        dayBegin: this._getDayBegin(yy, mm),
        dayTotal: this._getDayTotal(yy, mm),
        indexUrl: (yy % 12 + 8) % 12
      })
    },
    _getCurrentDate() {
      this.setData({
        date: this.data.indexYear + '-' + (this.data.indexMonth + 1) + '-' + this.data.indexDate
      })
    },
    _getDayTotal(year, month) {
      let d = new Date(year, month + 1, 0);
      return d.getDate();
    },
    _getDayBegin(year, month) {
      let d = new Date(year, month, 1);
      return d.getDay();
    }
  },
  lifetimes: {
    attached: function() {
      this.getCurDate()
    },
    detached: function() {}
  }
})
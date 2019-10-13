Page({
  data: {
    cIndex: 0,
    likes: [{
        id: 600,
        title: "hot",
        scrollTop: '',
        list: [{
            id: 6000,
            pic: '/images/p6.jpg'
          },
          {
            id: 6001,
            pic: '/images/p6.jpg'
          },
          {
            id: 6002,
            pic: '/images/p6.jpg'
          },
          {
            id: 6003,
            pic: '/images/p6.jpg'
          },
          {
            id: 6004,
            pic: '/images/p6.jpg'
          },
        ]
      },
      {
        id: 601,
        title: "coffee",
        list: [{
            id: 6010,
            pic: '/images/p6.jpg'
          },
          {
            id: 6011,
            pic: '/images/p6.jpg'
          },
          {
            id: 6012,
            pic: '/images/p6.jpg'
          },
          {
            id: 6013,
            pic: '/images/p6.jpg'
          },
          {
            id: 6014,
            pic: '/images/p6.jpg'
          },
          {
            id: 6015,
            pic: '/images/p6.jpg'
          },
          {
            id: 6016,
            pic: '/images/p6.jpg'
          },
          {
            id: 6017,
            pic: '/images/p6.jpg'
          },
        ]
      },
      {
        id: 602,
        title: "music",
        list: [{
            id: 6020,
            pic: '/images/p6.jpg'
          },
          {
            id: 6021,
            pic: '/images/p6.jpg'
          },
          {
            id: 6022,
            pic: '/images/p6.jpg'
          },
          {
            id: 6023,
            pic: '/images/p6.jpg'
          },
          {
            id: 6024,
            pic: '/images/p6.jpg'
          },
        ]
      },
      {
        id: 603,
        title: "book",
        list: [{
            id: 6030,
            pic: '/images/p6.jpg'
          },
          {
            id: 6031,
            pic: '/images/p6.jpg'
          },
          {
            id: 6032,
            pic: '/images/p6.jpg'
          },
          {
            id: 6033,
            pic: '/images/p6.jpg'
          },
          {
            id: 6034,
            pic: '/images/p6.jpg'
          },
          {
            id: 6035,
            pic: '/images/p6.jpg'
          },
          {
            id: 6036,
            pic: '/images/p6.jpg'
          },
          {
            id: 6037,
            pic: '/images/p6.jpg'
          },
        ]
      },
      {
        id: 604,
        title: "movie",
        list: [{
            id: 6040,
            pic: '/images/p6.jpg'
          },
          {
            id: 6041,
            pic: '/images/p6.jpg'
          },
          {
            id: 6042,
            pic: '/images/p6.jpg'
          },
          {
            id: 6043,
            pic: '/images/p6.jpg'
          },
          {
            id: 6044,
            pic: '/images/p6.jpg'
          },
          {
            id: 6045,
            pic: '/images/p6.jpg'
          },
        ]
      },
      {
        id: 605,
        title: "food",
        list: [{
            id: 6050,
            pic: '/images/p6.jpg'
          },
          {
            id: 6051,
            pic: '/images/p6.jpg'
          },
          {
            id: 6052,
            pic: '/images/p6.jpg'
          },
          {
            id: 6053,
            pic: '/images/p6.jpg'
          },
          {
            id: 6054,
            pic: '/images/p6.jpg'
          },
          {
            id: 6055,
            pic: '/images/p6.jpg'
          },
          {
            id: 6056,
            pic: '/images/p6.jpg'
          },
        ]
      }
    ]
  },
  onSel(e) {
    this.setData({
      cIndex: e.currentTarget.dataset.idx
    })
  },
  onScroll(e) {
    console.log(e)
    // 0 1082 2795 3877 5590 6883
  },
  onLoad: function(options) {}
})
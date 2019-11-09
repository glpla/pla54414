Page({
  data: {
    navIndex: 0,
    curTitle: 'hotsale',
    curIndex: 0,
    num: 100,
    orders: [{
      uid: 'm6000',
      num: 2
    }, {
      uid: 'm6002',
      num: 1
    }],
    likes: [{
        id: 600,
        title: "促销",
        scrollTop: '',
        list: [{
            id: 'm6000',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '120',
            oldPrice: '160',
            title: '伤风感冒胶囊',
            desc: '喝了都说好'
          },
          {
            id: 'm6001',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '10',
            oldPrice: '20',
            title: '活络舒筋',
            desc: '用了更爽快',
            num: 101
          },
          {
            id: 'm6002',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '70',
            oldPrice: '150',
            title: '伤风感冒胶囊',
            desc: '喝了都说好',
            num: 0
          },
          {
            id: 'm6003',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '80',
            oldPrice: '100',
            title: '伤风感冒胶囊',
            desc: '喝了都说好',
            num: 9
          },
          {
            id: 'm6004',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '20',
            oldPrice: '60',
            title: '伤风感冒胶囊',
            desc: '喝了都说好',
            num: 3
          },
          {
            id: 'm6005',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '20',
            oldPrice: '60',
            title: '伤风感冒胶囊',
            desc: '喝了都说好'
          },
          {
            id: 'm6006',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '20',
            oldPrice: '60',
            title: '伤风感冒胶囊',
            desc: '喝了都说好',
            num: 10
          }
        ]
      },
      {
        id: 601,
        title: "coffee",
        list: [{
            id: 6010,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6011,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6012,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6013,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6014,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6015,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6016,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6017,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
        ]
      },
      {
        id: 602,
        title: "music",
        list: [{
            id: 6020,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6021,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6022,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6023,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6024,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
        ]
      },
      {
        id: 603,
        title: "book",
        list: [{
            id: 6030,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6031,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6032,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6033,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6034,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6035,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6036,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6037,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
        ]
      },
      {
        id: 604,
        title: "movie",
        list: [{
            id: 6040,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6041,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6042,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6043,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6044,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6045,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
        ]
      },
      {
        id: 605,
        title: "food",
        list: [{
            id: 6050,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6051,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6052,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6053,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6054,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6055,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
          {
            id: 6056,
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg'
          },
        ]
      }
    ]
  },
  subtract(e) {
    console.log(e);
    // let uid = e.currentTarget.dataset.uid;
    // let price = e.currentTarget.dataset.price;
    // console.log(uid)
    // this.queryOrder(uid, 'subtract')
  },
  add(e) {
    console.log(e);
    // let uid = e.currentTarget.dataset.uid;
    // let price = e.currentTarget.dataset.price;
    // console.log(uid)
    // this.queryOrder(uid, 'add')
  },
  queryOrder(uid, str) {
    this.data.orders.forEach(item => {
      // console.log(item)
      for (let key in item) {
        console.log(uid, key, item[key]);
        if (item[key] === uid) {
          console.log('there you are!')
          break;
        }
      }
    })
  },
  nav(e) {
    console.log(e.detail)
    this.setData({
      navIndex: e.detail
    })
  },
  onSel(e) {
    this.setData({
      curIndex: e.currentTarget.dataset.idx,
      curTitle: e.currentTarget.dataset.title
    })
    console.log(this.data.likes[this.data.curIndex])
  },
  onLoad: function(options) {}
})
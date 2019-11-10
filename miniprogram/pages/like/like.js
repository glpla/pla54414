Page({
  data: {
    navIndex: 0,
    curTitle: 'hotsale',
    curIndex: 0,
    tmp: [],
    orders: [],
    goods: [{
        uid: 600,
        title: "促销",
        scrollTop: '',
        list: [{
            uid: 'm6000',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '120',
            oldPrice: '160',
            title: '伤风感冒胶囊',
            desc: '喝了都说好'
          },
          {
            uid: 'm6001',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '10',
            oldPrice: '20',
            title: '强效活络舒筋十全不补丸',
            desc: '用了更爽快'
          },
          {
            uid: 'm6002',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '70',
            oldPrice: '150',
            title: '伤风123感1冒胶囊',
            desc: '喝了都说好'
          },
          {
            uid: 'm6003',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '80',
            oldPrice: '100',
            title: '伤风456感冒胶456囊',
            desc: '喝了都说好'
          },
          {
            uid: 'm6004',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '20',
            oldPrice: '60',
            title: '伤风867感冒胶099囊',
            desc: '喝了都说好'
          },
          {
            uid: 'm6005',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '20',
            oldPrice: '60',
            title: '伤风感1111111冒胶囊',
            desc: '喝了都说好'
          },
          {
            uid: 'm6006',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '20',
            oldPrice: '60',
            title: '伤风感2222222冒胶囊',
            desc: '喝了都说好'
          }
        ]
      },
      {
        uid: 601,
        title: "coffee",
        list: [{
          uid: 'm6010',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '210',
          oldPrice: '260',
          title: '伤风2感3333333333冒胶囊',
          desc: '喝了都说好'
        }, {
          uid: 'm6011',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '140',
          oldPrice: '170',
          title: '伤风123感冒胶囊',
          desc: '喝了都说好'
        }, {
          uid: 'm6012',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '20',
          oldPrice: '60',
          title: '伤风感35冒胶囊',
          desc: '喝了都说好'
        }, {
          uid: 'm6013',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '10',
          oldPrice: '16',
          title: '伤风感6345冒胶囊',
          desc: '喝了都说好'
        }]
      },
      {
        uid: 602,
        title: "music",
        list: [{
            uid: 'm6020',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '220',
            oldPrice: '225',
            title: 'jkl伤风2感333333冒胶囊',
            desc: '喝了都说好'
          },
          {
            uid: 'm6021',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '270',
            oldPrice: '295',
            title: 'adf伤风2感333333冒胶囊',
            desc: '喝了都说好'
          }, {
            uid: 'm6022',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '420',
            oldPrice: '425',
            title: '伤风ghj2感333ghj333冒胶囊',
            desc: '喝了都说好'
          }, {
            uid: 'm6023',
            pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
            newPrice: '110',
            oldPrice: '125',
            title: '伤风2感3333dfgh33冒胶囊',
            desc: '喝了都说好'
          }
        ]
      },
      {
        uid: 603,
        title: "book",
        list: [{
          uid: 'm6030',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '120',
          oldPrice: '150',
          title: 'jkl伤风2感3333冒胶囊',
          desc: '喝了都说好'
        }, {
          uid: 'm6031',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '100',
          oldPrice: '105',
          title: 'jkl伤sdf2感333333冒胶囊',
          desc: '喝了都说好'
        }, {
          uid: 'm6032',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '40',
          oldPrice: '45',
          title: 'jkl伤风2感333333冒胶囊',
          desc: '喝了a都说好'
        }, {
          uid: 'm6033',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }]
      },
      {
        uid: 604,
        title: "movie",
        list: [{
          uid: 'm6040',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }, {
          uid: 'm6041',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }, {
          uid: 'm6042',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }, {
          uid: 'm6043',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }, {
          uid: 'm6044',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }]
      },
      {
        uid: 605,
        title: "food",
        list: [{
          uid: 'm6050',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }, {
          uid: 'm6051',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }, {
          uid: 'm6052',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }, {
          uid: 'm6053',
          pic: 'cloud://glpla-54414.676c-glpla-54414-1259726622/pla54414-swiper/1571532182322.jpg',
          newPrice: '220',
          oldPrice: '225',
          title: 'jkl伤风2感33df3333冒胶囊',
          desc: '喝了sdf都说好'
        }]
      }
    ]
  },
  subtract(e) {
    let item = e.currentTarget.dataset.item;
    this.queryOrderSub(item);
    console.log(this.data.orders)
  },
  add(e) {
    let item = e.currentTarget.dataset.item;
    this.queryOrderAdd(item);
    console.log(this.data.orders)
  },
  queryOrderSub(item) {
    let uid = item.uid;
    let title = item.title;
    let price = item.newPrice;
    for (let i = 0; i < this.data.orders.length; i++) {
      if (this.data.orders[i].uid == uid) {
        this.data.orders[i].num--;
        if (this.data.orders[i].num == 0) {
          this.data.orders.splice(i, 1);
        }
        this.updateOrders();
        return;
      }
    }
  },
  queryOrderAdd(item) {
    let uid = item.uid;
    let title = item.title;
    let price = item.newPrice;
    for (let i = 0; i < this.data.orders.length; i++) {
      if (this.data.orders[i].uid == uid) {
        this.data.orders[i].num++;
        return;
      }
    }
    this.data.orders.push({
      uid: uid,
      title: title,
      price: price,
      num: 1
    })
    this.updateOrders();
  },
  updateOrders() {
    let tmp = this.data.orders;
    this.setData({
      orders: tmp
    })
  },
  nav(e) {
    console.log(e.detail)
    this.setData({
      navIndex: e.detail
    })
    let orders = this.data.orders;
    switch (e.detail) {
      case '0':
        break;
      case '1':
        wx.navigateTo({
          url: './cart/cart?orders=' + JSON.stringify(orders)
        })
        break;
      case '2':
        break;
    }
  },
  onSel(e) {
    this.setData({
      curIndex: e.currentTarget.dataset.idx,
      curTitle: e.currentTarget.dataset.title
    })
    console.log(this.data.goods[this.data.curIndex])
  },
  onLoad: function(options) {}
})
const app = getApp();
const db = wx.cloud.database();
Component({

  properties: {
    records: {
      type: Array,
      value: []
    },
    isSelf: {
      type: Boolean,
      value: false
    },
    curUser: {
      type: String,
      value: ''
    }
  },
  data: {
    inter: 0,
    curIndex: null,

    isDel: false,
    isLike: false,
    isComment: false,

    isLiked: false,

    isClick: false,
    commentId: null,
    commentIndex: null,
    test: [1, 2, 3, 4, 5]
  },

  methods: {
    showOptions(e) {
      clearTimeout(this.data.inter);
      // console.log(e.currentTarget.dataset.idx);
      let likes = e.currentTarget.dataset.likes,
        isLiked = likes.includes(this.data.curUser);
      this.setData({
        curIndex: e.currentTarget.dataset.idx,
        isLiked
      })
      this.data.inter = setTimeout(() => {
        this.setData({
          curIndex: null
        })
      }, 3000)
      // if (this.data.isClick) {
      //   this.setData({
      //     curIndex: null,
      //     isClick: false
      //   })
      // } else {
      //   let likes = e.currentTarget.dataset.likes,
      //     isLike = likes.includes(this.data.curUser);
      //   this.setData({
      //     curIndex: e.currentTarget.dataset.idx,
      //     isClick: true,
      //     isComment: false,
      //     isLike
      //   })
      // }
    },
    optionDel(e) {
      // console.log(e.currentTarget.dataset);
      clearTimeout(this.data.inter);
      this.setData({
        curIndex: null
      })
      // console.log(e, e.currentTarget.dataset.id);
      let id = e.currentTarget.dataset.id;
      const db = wx.cloud.database();
      db.collection('pla54414').doc(id).remove({
        success: res => {
          this.onQuery();
        },
        fail: err => {
          console.error('[数据库] [删除记录] 失败：', err)
        }
      })
    },
    optionLike(e) {
      // console.log(e.currentTarget.dataset);
      clearTimeout(this.data.inter);
      this.setData({
        curIndex: null
      })

      let idx = e.currentTarget.dataset.idx,
        id = e.currentTarget.dataset.id,
        likes = e.currentTarget.dataset.likes;
      if (likes.includes(this.data.curUser)) {
        console.log('取消点赞');
        let index = likes.findIndex(value => value == this.data.curUser);
        likes.splice(index, 1);
      } else {
        console.log('点赞成功')
        likes.push(this.data.curUser)
      }
      wx.cloud.callFunction({
        name: 'likes',
        data: {
          _id: id,
          likes: likes
        },
        success: res => {
          this.onQuery();
        },
        fail: console.error
      })
    },
    optionRes(e) {
      // console.log(e.currentTarget.dataset);
      clearTimeout(this.data.inter);
      this.setData({
        curIndex: null
      })
    },
    res(e) {
      let comment_id = e.currentTarget.dataset.comment_id,
        id = e.currentTarget.dataset.id;
      this.setData({
        isComment: true,
        isClick: false
      })
    },
    onLike(e) {
      let idx = e.currentTarget.dataset.idx,
        id = e.currentTarget.dataset.id,
        records = this.data.records,
        tmp = records[idx],
        time = tmp.time,
        like = tmp.like;
      console.log(idx, tmp)
      like++;
      tmp.like = like;
      this.setData({
        records
      })
      wx.cloud.callFunction({
        name: 'like',
        data: {
          _id: id,
          like: like
        },
        success: res => {
          wx.showToast({
            title: '点赞成功',
            icon: "none"
          })
        },
        fail: console.error
      })
    },
    onQuery() {
      db.collection('pla54414').orderBy('time', 'desc').get().then(res => {
        // console.log(res.data)
        this.setData({
          records: res.data
        })
      }).catch(err => {
        console.log(err)
      })
    }

  },
  lifetimes: {
    attached: function() {},
    detached: function() {}
  }
})
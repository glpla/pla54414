import {
  formatTime
} from '../../utils/util.js'
import {
  config
} from '../../utils/config.js'
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
    curUser: '',
    inter: 0,
    curIndex: null,
    optionId: null,

    isDel: false,
    isLike: false,
    isComment: false,

    isLiked: false,

    resMsg: '',


    replyMsg: '',
    replyId: null
  },

  methods: {
    showOptions(e) {
      clearTimeout(this.data.inter);
      // console.log(e.currentTarget.dataset.idx);
      let likes = e.currentTarget.dataset.likes,
        isLiked = likes.includes(this.data.curUser);
      this.setData({
        curIndex: e.currentTarget.dataset.idx,
        optionId: null,
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
        optionId: e.currentTarget.dataset.option,
        isComment: true,
        curIndex: null
      })
    },
    onResInput(e) {
      let resMsg = e.detail.value;
      this.setData({
        resMsg
      })
    },
    onResSubmit(e) {
      let id = e.currentTarget.dataset.idx,
        comments = e.currentTarget.dataset.comments,
        resMsg = this.data.resMsg,
        user = app.globalData.userInfo.nickName,
        cont = user + ': ' + resMsg,
        time = formatTime(new Date()),
        comment = {
          cont,
          time,
          user
        };
      comments.unshift(comment);
      console.log(comments);
      this.setData({
        resMsg: '',
        optionId: null
      })
      wx.cloud.callFunction({
        name: 'comments',
        data: {
          _id: id,
          comments: comments
        },
        success: res => {
          this.onQuery();
          wx.showToast({
            title: '评论成功',
            icon: "none"
          })
        },
        fail: console.error
      })
    },
    onReply(e) {
      let user = e.currentTarget.dataset.user,
        id = e.currentTarget.dataset.idx,
        replyId = e.currentTarget.dataset.reply_id;
      // console.log(e.currentTarget.dataset, user, id, replyId);
      this.setData({
        replyId
      })
    },
    onReplyInput(e) {
      let replyMsg = e.detail.value;
      this.setData({
        replyMsg
      })
    },
    onReplySubmit(e) {
      let id = e.currentTarget.dataset.idx,
        comments = e.currentTarget.dataset.comments,
        tar = e.currentTarget.dataset.user,
        replyMsg = this.data.replyMsg,
        user = app.globalData.userInfo.nickName,
        cont = user + ' 回复了 ' + tar + ': ' + replyMsg,
        time = formatTime(new Date()),
        comment = {
          cont,
          time,
          user
        };
      comments.unshift(comment);
      // console.log(comment);
      this.setData({
        replyId: null
      })
      wx.cloud.callFunction({
        name: 'comments',
        data: {
          _id: id,
          comments: comments
        },
        success: res => {
          this.onQuery();
          wx.showToast({
            title: '回复成功',
            icon: "none"
          })
        },
        fail: console.error
      })
    },
    onReplyDel(e) {
      let id = e.currentTarget.dataset.idx,
        comments = e.currentTarget.dataset.comments,
        del = e.currentTarget.dataset.del;
      // console.log(comments.length);
      comments.splice(del, 1);
      // console.log(comments.length);
      this.setData({
        replyId: null
      })
      wx.cloud.callFunction({
        name: 'comments',
        data: {
          _id: id,
          comments: comments
        },
        success: res => {
          this.onQuery();
          wx.showToast({
            title: '删除成功',
            icon: "none"
          })
        },
        fail: console.error
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
    attached: function() {
      this.setData({
        curUser: app.globalData.userInfo.nickName
      })
    },
    detached: function() {
      this.setData({
        curIndex: null,
        optionId: null,
        isDel: false,
        isLike: false,
        isComment: false,
        isLiked: false,
        resMsg: '',
        replyMsg: '',
        replyId: null
      })
    }
  }
})
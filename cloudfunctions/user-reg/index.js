// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  await db.collection('wine-user').where({
    _openid: event.openid
  }).remove()
  return await db.collection('wine-user').add({
    data: {
      _openid: event.openid,
      regTime: event.regTime,
      user: event.user,
      name: event.name,
      pass: event.pass,
      addr: event.addr,
      cell: event.cell,
      birth: event.birth,
      reco: event.reco,
      credit: event.credit,
      vip: event.vip,
      other: ''
    }
  }).then(res => {
    return res
  })
}
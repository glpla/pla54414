const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async(event, context) => {
  return await db.collection(event.dbName).count().then(res => {
    return res
  })
}
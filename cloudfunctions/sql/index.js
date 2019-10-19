const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command;
// 云函数入口函数
exports.main = async(event, context) => {
  let res = null;
  switch (event.ind) {
    case "todo":
      res = await db.collection('pla54414-office').where({
        flag: 0
      }).get()
      break;
    case 'doing':
      res = await db.collection('pla54414-office').where({
        flag: _.and(_.gt(0), _.lt(4))
      }).get()
      break;
    case 'done':
      res = await db.collection('pla54414-office').where({
        flag: 4
      }).get()
      break;
    case 'all':
      res = await db.collection('pla54414-office').get()
      break;
  }
  return res;

}
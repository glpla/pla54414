const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = async(event, context) => {
  let total = await db.collection('pla54414-office').where({
    flag: 4
  }).count();
  let res = await db.collection('pla54414-office').where({
    flag: 4
  }).get();

  return {
    total,
    res
  }
}
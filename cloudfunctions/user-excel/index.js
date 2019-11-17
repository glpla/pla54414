const cloud = require('wx-server-sdk')
cloud.init({
  env: 'glpla-54414'
})
const xlsx = require('node-xlsx');
const db = cloud.database()

exports.main = async(event, context) => {
  let {
    fileID
  } = event
  // 0.清空数据
  let clear = await db.collection('wine-user').where({
    vip: db.command.gt(0)
  }).remove();
  console.log('clear', clear);

  // 1.通过fileID下载云存储里的excel文件
  const res = await cloud.downloadFile({
    fileID: fileID,
    // fileID: 'cloud://glpla-54414.676c-glpla-54414-1259726622/1573834970555.xls',
  })
  const buffer = res.fileContent

  const tasks = [] //用来存储所有的添加数据操作
  // 2.解析excel文件里的数据
  let sheets = xlsx.parse(buffer); //获取到所有sheets
  sheets.forEach(function(sheet) {
    console.log('sheet name:', sheet['name']);
    for (let rowId in sheet['data']) {
      let row = sheet['data'][rowId]; //第几行数据
      console.log('rowId:', rowId, 'row:', row);
      if (rowId > 0 && row) { //第一行是表格标题，所有我们要从第2行开始读
        //3.把解析到的数据存到excelList数据表里
        const promise = db.collection('wine-user')
          .add({
            data: {
              name: row[0],
              vip: row[1],
              cell: row[2],
              birth: row[3],
              addr: row[4],
              credit: row[5],
              reco: row[6],
              other: row[7]
            }
          })
        tasks.push(promise)
      }
    }
  });

  // 等待所有数据添加完成
  let result = await Promise.all(tasks).then(res => {
    return res
  }).catch(function(err) {
    return err
  })
  return result
}
const mysql = require('mysql')
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'h5'
}

// 连接数据库
const cnt = mysql.createConnection(config)
cnt.connect((err) => {
  if (err) throw err
  console.log('数据库连接成功')
})

const querySql = (sql) => {
  return new Promise((resolve, reject) => {
    cnt.query(sql, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

const queryList = () => {
  const sql = 'SELECT * from templates'
  return querySql(sql)
}

// queryList().then(res => {
//   console.log(res)
// })

module.exports = {
  queryList
}

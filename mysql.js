const mysql = require('mysql')
const config = {
  host: 'localhot',
  user: 'root',
  password: '1223456',
  database: 'h5',
  port: 3306
}
const connection = mysql.createConnection(config)
connection.connect()

const fs = require('fs')
const content = '写入的一些内容'
fs.readFile('./a.txt', 'utf8', (err, data) => {
  if (err) return
  console.log(data)
})

fs.writeFile('./a.txt', content, err => {
  if (err) {
    console.log(err)
  }
  // console.log("写入后的文件内容")
  // console.log(data)
})

const http = require('http')
const { hostname } = require('os')
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('content-type', 'text/plain')
  res.end()
})

server.listen(port, () => {
  console.log(`此服务运行在http://${hostname}:${port}/`)
})

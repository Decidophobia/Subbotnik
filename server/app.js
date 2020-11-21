const app = require('express')()
const http = require('http')

const port = process.env.port || 3001
const server = http.createServer(app)






server.listen(port, () => {console.log(`server is on ${port}`)})

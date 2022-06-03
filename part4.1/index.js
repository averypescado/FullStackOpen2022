const app = require('./app')
const http = require('http')

const config = require('./utils/config')
const server = http.createServer(app)


const logger = require('./utils/logger')



const Blog = require('./models/blog')



const PORT = process.env.PORT || 3003
server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

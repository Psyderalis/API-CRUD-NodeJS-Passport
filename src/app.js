const express = require('express')
const connectDB = require('./db')
const eventRouter = require('./router/eventRouter')
const customerRouter = require('./router/customerRouter')
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('./api-docs.json')
const cors = require('cors')

const { PORT } = require('./config')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/events', eventRouter)

app.use('/api/users', customerRouter)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

connectDB()

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
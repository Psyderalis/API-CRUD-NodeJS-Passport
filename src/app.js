const express = require('express')
const connectDB = require('./db')
const eventRouter = require('./router/eventRouter')
const { PORT } = require('./config')

const app = express()

app.use(express.json())

app.use('/api/events', eventRouter)

connectDB()

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
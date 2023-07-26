const express = require('express')
const connectDB = require('./db')
const eventRouter = require('./router/eventRouter')
const userRouter = require('./router/userRouter')
const authRouter = require('./router/authRouter')
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('./api-docs.json')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const { PORT } = require('./config')

const app = express()

app.use(express.json())
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))
app.use(cookieParser())

app.use('/api/events', eventRouter)
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

connectDB()

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
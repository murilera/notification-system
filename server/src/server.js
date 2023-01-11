const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const errorHandler = require('./middleware/errorHandler.middleware')
const connectDB = require('./db/db')


// load envs
const env = dotenv.config()
if (env.error) {
  throw env.error
}

// connect to mongodb
connectDB()

const app = express()

// body parser
app.use(express.json())

// cookie parser
app.use(cookieParser())

// dev logging middlware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

// enable CORS
app.use(cors())

// mount routers
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)

  server.close(() => process.exit(1))
})
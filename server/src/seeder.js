const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

// load env vars
dotenv.config()

// load models
const Categories = require('./db/models/Categories')
const Channels = require('./db/models/Channels')
const Logs = require('./db/models/Logs')
const Messages = require('./db/models/Messages')
const Users = require('./db/models/Users')

// connect to db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// read JSON files
const categoriesPath = path.join(__dirname, '/_data/categories.json')
const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf-8'))

const channelsPath = path.join(__dirname, '/_data/channels.json')
const channels = JSON.parse(fs.readFileSync(channelsPath, 'utf-8'))

// const logsPath = path.join(__dirname, '/_data/logs.json')
// const logs = JSON.parse(fs.readFileSync(logsPath, 'utf-8'))

// const messagesPath = path.join(__dirname, '/_data/messages.json')
// const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'))

const usersPath = path.join(__dirname, '/_data/users.json')
const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))


// import to db
const importData = async () => {
  try {
    await Categories.create(categories)
    await Channels.create(channels)
    // await Logs.create(logs)
    // await Messages.create(messages)
    await Users.create(users)

    console.log('Data imported...')
    process.exit()
  } catch (error) {
    console.error(error)
  }
}

// delete data
const deleteData = async () => {
  try {
    await Categories.deleteMany()
    await Channels.deleteMany()
    // await Logs.deleteMany()
    // await Messages.deleteMany()
    await Users.deleteMany()

    console.log('Data destroyed...')
    process.exit()
  } catch (error) {
    console.error(error)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
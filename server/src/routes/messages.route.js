const express = require('express')
const {
  add
} = require('../controllers/messages.controller')

const router = express.Router()

router.post('/add', add)
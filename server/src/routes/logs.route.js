const express = require('express')
const {
  get
} = require('../controllers/logs.controller')

const router = express.Router()

router.get('/', get)
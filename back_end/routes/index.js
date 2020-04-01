const express = require('express')
const router = express.Router()
const UserRouter = require('./user')

/* GET home page. */
router.use('/user', UserRouter)

module.exports = router

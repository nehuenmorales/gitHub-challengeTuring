const express = require('express')
const router = express.Router()
const { createTask } = require('../controllers/task/createTask')
const { allTasks } = require('../controllers/task/allTasks')



router.post('/createtask/:email', createTask)
router.get('/alltasks/:email', allTasks)




module.exports = router
const express = require('express')
const {getUsers, getUserByID, postUser,updateUser, deleteUser,  } = require('../controllers/UserController')

const router = express.Router()

router.get('/users', getUsers)

router.get('/users/:id', getUserByID)

router.post('/users', postUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

module.exports = router;
const express = require('express');
const UsersController = require('../controllers/UsersController.js');

const router = express.Router();

router.get('/users', UsersController.getAllUsers);

module.exports = router;
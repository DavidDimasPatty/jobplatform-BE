const express = require('express');
const router = express.Router();
const { hello, createUser } = require('../controllers/userController');

router.get('/', hello);
router.post('/users', createUser);

module.exports = router;
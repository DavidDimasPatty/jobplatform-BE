const express = require('express');
const router = express.Router();
const { hello,getAllUser,login,signup,getUserFilter,getUserDetail } = require('../controllers/userController');

router.get('/', hello);
router.get('/getAllUsers', getAllUser);
router.get('/getUserFilter', getUserFilter);
router.get('/getUserDetail', getUserDetail);
router.post('/logIn', login);
router.post('/signUp', signup);

module.exports = router;
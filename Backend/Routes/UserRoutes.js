const express = require('express');
const router = express.Router()
const UserController = require('../Controllers/UserControl');

router.post('/reg',UserController.postRegister);

router.post('/login',UserController.postLogin);

router.get ('/logout',UserController.logout);

module.exports=router;
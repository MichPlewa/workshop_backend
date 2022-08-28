const express = require('express');
const router = express.Router();
const User = require('../collections/user.collection');
const imageUpload = require('../utils/uploadFiles');

router.post('/register', imageUpload.single('avatar'), User.register);

router.post('/login', User.login);

router.delete('/logout', User.logout);

module.exports = router;

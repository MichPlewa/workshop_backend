const express = require('express');
const router = express.Router();
const User = require('../collections/user.collection');

router.post('/register', User.register);

router.post('/login', User.login);

router.delete('/logout', User.logout);

module.exports = router;

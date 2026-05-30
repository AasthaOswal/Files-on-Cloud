const express = require('express');
const auth = require('../middleware/auth');

const {signup, login, getMyInfo} = require("../controller/auth.controller.js");

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);


// Get current user info
router.get('/me', auth, getMyInfo);


module.exports = router;
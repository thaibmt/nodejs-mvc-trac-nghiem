// routes/user.js

const express = require('express');
const router = express.Router();
const checkRole = require('../middleware/checkRole');
const checkAuth = require('../middleware/checkAuth');

// Route yêu cầu quyền user
router.get('/', checkAuth, checkRole('user'), (req, res) => {
    res.render('user/dashboard');
});

module.exports = router;

// routes/admin.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const checkAuth = require('../middleware/checkAuth');
const checkRole = require('../middleware/checkRole');

// Route yêu cầu quyền admin
router.get('/', checkAuth, checkRole(User, 'admin'), (req, res) => {
    res.render('admin/dashboard');
});

module.exports = router;

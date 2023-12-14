const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Hiển thị form đăng nhập
router.get('/', (req, res) => {
    if (req.session.user) {
        return res.redirect(req.session.user.role);
    }
    res.render('login', { error: '', email: 'thaibmt47@gmail.com', password: '1234' });
});

// Xử lý đăng nhập
router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Kiểm tra đăng nhập
        const user = await User.findOne({ email, password });
        if (user) {
            req.session.user = user;
            res.redirect(user.role);
        } else {
            res.redirect('/login', { error: 'Email hoặc mật khẩu không đúng', email });
        }
    } catch (error) {
        console.error(error);
        res.redirect('/login', { error: 'Email hoặc mật khẩu không đúng' });
    }
});

module.exports = router;

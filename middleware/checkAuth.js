// middleware/checkAuth.js

module.exports = (req, res, next) => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (req.session.user) {
        next();
    }
    return res.redirect('login');
};

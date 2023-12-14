
module.exports = (User, role) => {
    return (req, res, next) => {
        if (req.session.user.role === role) {
            next();
        } else {
            res.redirect('/login');
        }
    };
};
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const authController = require('./controllers/authController');
const indexController = require('./controllers/indexController');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;
// Cấu hình trình xử lý view template
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/styles', express.static(__dirname + '/styles'));
// Kết nối với MongoDB (thay đổi đường dẫn nếu cần)
mongoose.connect('mongodb://0.0.0.0:27017/trac-nghiem');

// Sử dụng middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

// Sử dụng controllers
app.use('/', indexController);
app.use('/login', authController);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/setcookies', (req, res) => {
    res.cookie('name', 'John Doe').cookie('email', 'john@example.com').send('Cookies set successfully');
});

app.get('/getcookies', (req, res) => {
    const { name, email } = req.cookies;
    if (name && email) {
        res.send(`Welcome back, ${name}. Your email is ${email}`);
    } else {
        res.send('Cookies not found');
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

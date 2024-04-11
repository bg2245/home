const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;
    if (url === '/home') {
        res.end('Welcome to Home Page');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

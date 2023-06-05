const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 7000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url == '/') {
        res.statusCode = 200;
        const main = fs.readFileSync('../weather.json');
        res.end(main.toString());
    }
    else if (req.url == '/weather') {
        res.statusCode = 200;
        const main = fs.readFileSync('../weather.json');
        res.end(main.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>Page Not found</p>');
    }
});

server.listen(port, () => {
    console.log(`Server is listen on port ${port}`);
});
const http = require('http');
const fs = require('fs');
const path = require('path');


const port = process.env.PORT || 7000;

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Creating Own Server</h1>');
    }else if(req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>Creating About Own Server</h1>');  
    }else if(req.url == '/hello') {
        res.statusCode = 200;
        const main = fs.readFileSync('../index.html');
        res.end(main.toString());  
    }else if(req.url == '/home') {
        res.statusCode = 200;
        const main = fs.readFileSync('./data.js');
        res.end(main.toString());  
    }else if(req.url == '/weather') {
        res.statusCode = 200;
        const main = fs.readFileSync('../weather.json');
        res.end(main.toString());  
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Not Found</h1><p>Hey page Not found</p>');  
    }
}); 

server.listen(port, ()=>{
    console.log(`Server is listen on port ${port}`);
});
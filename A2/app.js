const http = require('http');
const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('What\'s up?');
//     next();

// });

// app.use((req, res, next) => {
//     console.log('So sad');
//     res.send('<h1>Ping</h1>');

// });

app.use('/users', (req, res, next) => {
    console.log('Slash users response');
    res.send('<h1>Users</h1>');

});

app.use('/', (req, res, next) => {
    console.log('Slash response');
    res.send('<h1>Main</h1>');

});



const server = http.createServer(app);

server.listen(8080);
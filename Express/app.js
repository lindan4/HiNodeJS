const http = require('http');
// const fs = require('fs');
// const { isNull } = require('util');
// const funcReq = require('./routes');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Parse body
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

});


app.listen(8080);
const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

//How do deal with request URIs?
router.get('/add-product', (req, res, next) => {
    console.log("Middleware");
    res.sendFile(path.join(rootDir ,'views', 'add-product.html'));
    // next();
});

router.post('/add-product', (req, res, next) => {
    const body = req.body;
    console.log(body);
    res.redirect('/');
});

module.exports = router;
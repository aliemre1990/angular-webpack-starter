const http = require('http');
const express = require('express');

/**
 * 
 * @param {Application} app 
 */
function initialize(app) {

    var server = http.createServer(app);

    app.use(express.static('public'));

    app.get('*', (req, res, next) => {
        res.sendFile(process.cwd() + '/public/index.html');
    });

    server.listen(5000, 'localhost');

}

module.exports = { initialize }



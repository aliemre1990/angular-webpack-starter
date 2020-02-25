const express = require('express');
const server = require('./server');

var app = express();
server.initialize(app);
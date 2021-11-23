const route = require('express').Router();
route.use('/api/v1', require('./api'));

module.exports = route;
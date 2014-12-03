var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/api', function (req, res, next) {
  res.json({
    hello: 'Api v1'
  })
});

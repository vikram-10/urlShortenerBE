//Page for main login
var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to the login page!");
});

module.exports = router;

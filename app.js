var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var mongoClient=require('mongodb');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');

var indexRouter = require('./routes/index');
var registerRouter=require('./routes/register');
var loginRouter=require('./routes/login');
var userRouter=require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/',registerRouter);
app.use('/',loginRouter);
app.use('/',userRouter);

module.exports = app;

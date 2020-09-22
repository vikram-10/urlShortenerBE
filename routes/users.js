var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
var {authenticate}=require('../common/auth');
const app = require('../app');
const saltRounds=10;
var url="mongodb://localhost:27017";

router.get('/dashboard',authenticate,function(req,res,next){
     res.json({
         message:"protected route"
     })
});

module.exports=router;
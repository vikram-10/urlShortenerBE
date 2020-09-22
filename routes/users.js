var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
var {authenticate}=require('../common/auth');
const app = require('../app');
const saltRounds=10;
var url="mongodb://localhost:27017";

router.get('/dashboard',authenticate,async function(req,res,next){
     let client=await mongoClient.connect(url);
     let db=client.db('urlShortener');
     let userDetails=await db.collection('user').findOne({email:req.headers.email});
     client.close();
     console.log(userDetails);
});

module.exports=router;
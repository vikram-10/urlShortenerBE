//Page to be used for registration
var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb');
var bcrypt=require('bcrypt');
const saltRounds=10;
var url="mongodb://localhost:27017";

/* GET Register page. */
router.get('/register', function(req, res, next) {
  res.send("Welcome to the registration page!");
});

router.post("/register",async function(req,res){
   let client=await mongoClient.connect(url);
   let db=client.db('urlShortener');
   bcrypt.hash(req.body.pass,saltRounds,async(err,hash)=>{
      db.collection('user').insertOne({email:req.body.email,pass:`${hash}`});
      res.json({
          message:"Inserted!"
      })
   });
   client.close();
});

module.exports = router;

//Page to be used for login
var express = require('express');
var router = express.Router();
var mongoClient=require('mongodb');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
const saltRounds=10;
var url="mongodb://localhost:27017";

/* GET Login page. */
router.get('/login', function(req, res, next) {
    res.send("Welcome to the login page!");
  });

router.post("/login",async (req,res)=>{
    let client=await mongoClient.connect(url);
    let db=client.db('urlShortener');
    let password=await db.collection('user').findOne({email:req.body.email});
    let hash=password.pass;
    bcrypt.compare(req.body.pass,hash,function(err,result){
       if(result==true){
            let signedToken=jwt.sign({
              data:req.body.email
            },'pqrstuvwxyz',{expiresIn:'1h'});
            console.log(signedToken);
       }
       else{
         res.json(result);
       }
    })
    client.close();
});

module.exports=router;
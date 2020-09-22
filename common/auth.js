//Used to create the authentication middleware used in users.js to show the dashboard contents
var jwt=require('jsonwebtoken');
var authenticate=function(req,res,next){
    if(req.headers.authenticate){
        jwt.verify(req.headers.authenticate,'pqrstuvwxyz',function(err,decode){
            if(err){
                res.json("Token invalid");
            }
            else{
                next();  //next() moves from the middleware to the callback function
            }
        });
    }
}
module.exports={authenticate};
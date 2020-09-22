var jwt=require('jsonwebtoken');
var authenticate=function(req,res,next){
    if(req.headers.authenticate){
        jwt.verify(req.headers.authenticate,'pqrstuvwxyz',function(err,decode){
            if(err){
                res.json("Token invalid");
            }
            else{
                next();
            }
        });
    }
}
module.exports={authenticate};
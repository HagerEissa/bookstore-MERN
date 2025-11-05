const jwt = require('jsonwebtoken')
const auth = require('../utili/auth')
process.loadEnvFile();  //عشان اقدر استخدم .env
const secretKey = process.env.JWT_SECRET;


exports.authMiddleware = (req,res,next)=> {
    // console.log('req= ',req)
    try{
        const token = req.header('Authorization')?.replace('Bearer ','');  //بشوف هي في تكوكين اتبعت فالهيدر ولا لا )لو اتبعت يبقي معناه انه عامل لوجن 
        if(token){
            // const verified = jwt.verify(token,secretKey); //verified  has user data
            const verified = auth.verifyToken(token); //auth فالفايل بتاع ال jwt عشان اخلي اي حاجه ليها علاقه بال 
            req.user = verified; //inject token to req
            console.log("verified:",verified);
            next();
        }else{
            res.status(401).json({error:'access denied ,token missing'})
        }
    }catch(err){
        res.status(401).json({error:err.message})

    }
    
}
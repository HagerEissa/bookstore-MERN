const jwt = require('jsonwebtoken');


process.loadEnvFile();  //عشان اقدر استخدم .env
const secretKey = process.env.JWT_SECRET;
// console.log("JWT_SECRET:", process.env.JWT_SECRET);
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;




const createAccessToken=(data)=>{
    return jwt.sign(data,secretKey,{expiresIn:JWT_EXPIRES_IN})  //return token
}


const verifyToken=(token)=>{
    return jwt.verify(token,secretKey)
}


module.exports={
    createAccessToken,
    verifyToken
}
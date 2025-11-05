const express = require('express');
const router = express.Router();
const authService = require('../services/authService')
const userService = require('../services/userService')

//register
router.post('/register',async(req,res)=>{
    try{
        const newbody = req.body;
        const createdUser = await authService.register(newbody);
        res.status(201).json({ message:"user registred successfuly " ,user:createdUser});
    }catch(err){
        res.status(400).send({"error":err.message});
    }

})

//signin
router.post('/signin',async(req,res)=>{
    try{
        const body = req.body;
        const token = await authService.signIn(body);
        const user = await userService.getByEmail(body.email);
        // res.status(200).json({ accessToken: token});
        res.status(200).json({ accessToken: token,user:{
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role_id: user.role_id
                }});
    }catch(err){
        res.status(400).send({"error":err.message});
    }
    
})



module.exports=router;
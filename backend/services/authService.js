// const userRepo = require('../repository/usersRepo')
const userRepo = require('../repository/mongoUsersRepo')

const bcrypt = require('bcryptjs');
const hashing = require('../utili/hashing')
const auth = require('../utili/auth')

//register
const register=async(user_data)=>{
    if(!user_data.email || !user_data.password || !user_data.name){
        
        console.log(user_data);
        throw Error('name , email and password are required')
    }
    const email=user_data.email;
    const password = user_data.password;
    const user= await userRepo.getByEmail(email);
    if(user){
        throw Error('user already exist')
    }
    const hashedPassword = await hashing.hashPassword(password);
    user_data.password=hashedPassword;
    
    
    const newUser = await userRepo.createUser(user_data)
    return{
        id:newUser.id,
        name:newUser.name,
        email:newUser.email,
        // newUser
    }
    
}


//signIn
const signIn=async(user_data)=>{
    if(!user_data.email || !user_data.password){
        // console.log(user_data);
        throw Error('email and password are required')
    }
    // const email=user_data.email;
    // const password = user_data.password;
    const {email,password} = user_data;
    const user = await userRepo.getByEmail(email) 
    //Validate email
    if(user){
        const isMatch =await hashing.isMatch(password,user.password)
        //validate password
        if(isMatch){
            //create access token
            const token = auth.createAccessToken({userName:user.name,email:user.email,id:user.id,role_id: user.role_id})
            return token;

        }else{
            throw Error("invalid email or password")
        }
    }else{
        throw Error("invalid email or password")
    }
}







module.exports = {
    register,
    signIn
}

const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/bookStoreITI').then(()=> console.log('database connected'));

    }catch(err){
        console.log(err.message);
        
    }
}


module.exports = connectDB;
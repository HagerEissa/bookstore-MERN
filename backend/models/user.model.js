const mongoose = require('mongoose');


const userSchema =new mongoose.Schema({
    name: { 
        type:String,
    },
    email: { 
        type:String,
        required:true,
        unique:true,
    },
    password: { 
        type:String,
        required:true,
    },
     role_id:{
        type:String,
        enum: ['user', 'admin','owner'],
        default: 'user'
    }},{
        timestamps:true
    }
    );

//MODEL ->instance                      'users'-> name of collection in database
module.exports = mongoose.model('Users',userSchema)
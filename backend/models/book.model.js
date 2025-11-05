const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { 
        type:String,
        required:true,
    },
    bookCoverImage: { 
        type:String,
        required:true,
    },
    description: { 
        type:String,
    },
    genre: { 
        type:String,
    },
    price: { 
        type:Number,
        required:true,
        min:0
    },
    publishedYear: { 
        type:Number,
    },
    isFeatured:{
        type:Boolean,
        default:false
    },
    isOnSale:{
        type:Boolean,
        default:false
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories',
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
        required: true
    }},{
        timestamps:true
    }
)


module.exports = mongoose.model('books',bookSchema)
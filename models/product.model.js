const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    desciption:{
        type:String,
        required:true
    }

})
const mongoose = require("mongoose");


const Register = mongoose.Schema({
    Full_Name:{
        type:String,
        required:true,
      
    },
    Email: {
        type: String,
        required: true
 
    },
    Phone: {
        type: Number,
        required: true
 
    },
    Photo: {
        type: String,
        required: true
 
    },
    Birthday:{
        type:Date,
        require:true
     },
    Gender:{
        type:String,
         require:true
     },
    Password:{
        type:String,
        required:true,
      
    },
    Policy:{
        type:Boolean,
        default:false
    },
    date:{
       type:Date,
       default:Date.now
    }
})
module.exports = mongoose.model('Registers',Register)
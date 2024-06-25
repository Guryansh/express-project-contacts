const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please enter a username"],
    },
    email:{
        type:String,
        required:[true,'Please enter a valid email address'],
        unique:[true, "Email address already exists"],
    },
    password:{
        type:String,
        required: [true,'Contact password is required'],
    }
},
    {
        timestamps: true,
    });

module.exports=mongoose.model("User",userSchema);
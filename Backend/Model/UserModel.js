const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    uname :{
        type:String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    pass:{
        type : String,
        required:true
    }
},{timestamps :true}) 
const UserModel = mongoose.model("User",UserSchema)
module.exports = UserModel
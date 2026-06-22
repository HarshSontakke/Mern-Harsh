const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    id:{
        type :Number,
        required:true,
    },
    cname:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    level:{
        type : String,
        required:true,
        enum:["Beginner","Intermediate","Advance"]
    },
    imgurl:{
        type:String,
        required:true
    }
})
const CourseModel = mongoose.model("Courses",courseSchema)

module.exports=CourseModel
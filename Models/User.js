const mongoosee = require("mongoose");

const userSchema  =new mongoosee.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    password:{
        type:String,
        required:true,
  
    },

    email:{
        type:String,
        required:true,
        trim:true,
    },

    role:{
       type:String,
       enum:["Admin", "Student" , "Visitor"]
    },

});

module.exports=mongoose.model("user", userSchema);
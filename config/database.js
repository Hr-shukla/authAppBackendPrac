const mongoose = require("mongoose");

require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

exports.connect=() =>{
    mongoose.connect(MONGODB_URL)
    .then( ()=>{console.log("db connected ")})
    .catch((error) =>{
         console.log("issue in Db");
        console.log(error);
        process.exit(1);
    })
};

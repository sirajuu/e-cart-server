// define connection between node and mongodb using mongoose


//  import mongoose
const mongoose = require('mongoose')

// get connection string from env
const DB = process.env.DATABASE

// connect mongodb
mongoose.connect(DB,{
    // remove warning
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Cart database connected successfully");
}).catch((error)=>{
    console.log(error);
})
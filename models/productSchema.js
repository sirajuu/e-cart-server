// define schema for product

const mongoose = require('mongoose')

// using mongoose define schema
 const productSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        rate:{
            type:Number,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }
 })

//  create model using the above schema
  const products = mongoose.model("products",productSchema)


//   export model

module.exports = products

// small letter
// plural
// db=server collection
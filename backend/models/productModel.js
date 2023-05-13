const mongoose = require("mongoose");

const ptoductSchema = mongoose.Schema({
    id:{
         type:String
    },
    name:{
        type:String,
        required:[true,"Please Enter the product Name"],
        // trim:true
    },
    description:{
        type:String,
        required:[false,"Please Enter the product Discription"]
    },
    price:{
        type:String,
        required:[false,"Please Enter the product Price"],
        maxLength:[8,"Price cannot exceed 8 Characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
        {
            public_id:{
                type:String,
                required:false
            },
            url:{
                type:String,
                required:false
            }
        }
    ],
    category:{
        type:String,
        required:[false,"Please Enter the product Category"]
        
    },
    stock:{
        type:Number,
        required:[false,"Please Enter the product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:false,
            },
            rating:{
                type:Number,
                required:false,
            },
            Comment:{
                type:String,
                required:false
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product",ptoductSchema);

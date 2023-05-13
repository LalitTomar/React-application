const { default: mongoose } = require("mongoose");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");





// create product -- Admin
exports.createProduct = async (req,res,next)=>{
    const _id= String(mongoose.Types.ObjectId())
    
    const data={...req.body,_id,id:_id}
    console.log("data",data);
    const product = await Product.create(data);
    res.status(201).json({
        success:true,
        product
    })

}


// Get All Product
exports.getAllProducts = async (req,res)=>{
   const products= await Product.find();

    res.status(200).json({
        success:true,
        products,
    });
};

// Get Product Details
exports.getProductDetails = async(req,res,next)=>{
    const product = await Product.find({id:req.params.id});
    
        if(product.length===0){
            return res.status(404).json({"message":"Product not Found"});
        }
        res.status(200).json({ 
            success:true,
            product,
        });
    };



// Update Product ---Admin


exports.updateProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(500).json({
            success:false,
            meassage:"Product not Found"
        })
    }
console.log("dfjhhdhffd",req.body);
    product = await Product.findByIdAndUpdate(req.params.id,{...req.body,id:req.params.id}
    //     ,{
    //     new:true,
    //     runValidators:true,
    //     useFindAndModify:false
    // }
    );

    res.status(200).json({
        success:true,
        product
    })
}


// exports.updateProduct = async (req,res,next)=>{
//     const{ id }=req.params
//     console.log(id)
//     let product = await Product.find({_id:ObjectId(id)});
//     console.log(product);
//     if(!product){
//         return res.status(500).json({
//             success:false,
//             meassage:"Product not Found"
//         })
//     }

//     product = await Product.findByIdAndUpdate(id,req.body,{
//         new:true,
//         runValidators:true,
//         useFindAndModify:false
//     });

//     res.status(200).json({
//         success:true,
//         product
//     })
// }


// Delete Product

exports.deleteProduct = async(req,res,next)=>{
    // const{ id }=req.params
    // console.log(id)

    const product = await Product.findById(req.params.id)

    if(!product){
        return res.status(500).json({
            success:false,
            meassage:"Product not Found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        meassage:"Product Delete Successfully"
    })
} 
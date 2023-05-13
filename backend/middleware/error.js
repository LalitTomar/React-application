const ErrorHander = require("../utils/errorhander");

module.exports = (err,res,req,next) => {
    err.statusCode = err.statusCode  || 500;
    err.meassage = err.meassage || "Internal Server Error";
    
    res.status(err.statusCode).json({
        success: false,
        error: err,
        // meassage:err.meassage,
    });
};
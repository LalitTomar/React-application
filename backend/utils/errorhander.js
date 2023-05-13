class ErrorHander extends Error{
    constructor(meassage,statusCode){
        supper(meassage);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);
    }
}


module.exports = ErrorHander
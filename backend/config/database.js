const Mongoose = require("mongoose");

class dbConnect {
    static connect(URL) {
      console.log("dfjjjassfdhd0",URL);
      Mongoose.connect(URL,(err) => {
          if(err) throw new Error("Connect error to MongoDB");
          console.log("MongoDB connected!");
        });
    }
  }


  module.exports = dbConnect;

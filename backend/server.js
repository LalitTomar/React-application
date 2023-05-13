const app  = require("./app");
const dotenv = require("dotenv");
const  dbConnect= require("./config/database")


// congig

dotenv.config({path:"backend/config/config.env"});

// connecting to Database

dbConnect.connect(process.env.DB_URI)

app.listen(process.env.PORT,()=>{

    console.log(`Server is Working on http://localhost:${process.env.PORT}`)
})
const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("Connection of DB successful."))
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbconnect;
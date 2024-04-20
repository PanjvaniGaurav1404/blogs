const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blogs = require("./routes/blogs");
app.use("/api/v1",blogs)

app.listen(PORT,()=>{
    console.log("App is running successfully")
});

const dbconnect = require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
    res.send("<h1>This is Homepage</h1>")
})
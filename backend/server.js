const express = require("express");
const app=express();
app.get("/",(req,res) => {
    res.send("Hello World");
})

app.get("/about",(req,res) => {
    res.send("about");
})
app.listen(3000,()=> console.log("server listening at 3000"));
// import mongoose
var mongoose = require('mongoose');

//connect with db
mongoose.connect("mongodb+srv://adwaidmanoj:adwaid8207@cluster0.xqm5f4g.mongodb.net/Studentdb?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected to db")})
    .catch((err)=> console.log(err));
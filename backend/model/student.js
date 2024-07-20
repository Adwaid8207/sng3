//1.Importing mongoose
var mongoose = require("mongoose");

var stuSchema = mongoose.Schema({
    s_name:String,
    s_age:Number,
    s_rollno:Number,
    s_place:String,
    s_dept:String,

});



var stuModel = mongoose.model("student",stuSchema);
module.exports = stuModel;

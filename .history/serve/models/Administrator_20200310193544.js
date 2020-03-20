const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    name:{type:String},
    password:{type:String}
    
})

module.exports = mongoose.model("Administrator",Schema)
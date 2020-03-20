const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema({
    name:{type:String},
    password:{type:String,$set:bcrypt.hashSync('bacon', 8)}
    
})

module.exports = mongoose.model("Administrator",Schema)
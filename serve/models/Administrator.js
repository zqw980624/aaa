const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema({
    name:{type:String},
    password:{
        type:String,
        select:false,
        set(val){
            return bcrypt.hashSync(val, 8);
        }
    }
    
})

module.exports = mongoose.model("Administrator",Schema)
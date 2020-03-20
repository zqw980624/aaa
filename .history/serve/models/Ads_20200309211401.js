const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    name:{type:String},
    title:{type:String},
    ads:[{
        link:{type:String},
        image:{type:String}
    }]
})

module.exports = mongoose.model("Ad",Schema)
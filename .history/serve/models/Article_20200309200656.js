const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    title:{type:String}
})

module.exports = mongoose.model("Category",Schema)
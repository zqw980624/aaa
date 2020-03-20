const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:"Category"}],
    title:{type:String}
})

module.exports = mongoose.model("Article",Schema)
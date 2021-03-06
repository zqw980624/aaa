const mongoose = require("mongoose")
const Schema = mongoose.Schema({
    name:{type:String},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:"Category"}],
    avator:{type:String},
    title:{type:String},
    details:{
        difficulty:{type:Number},
        skill:{type:Number},
        attack:{type:Number},
        existence:{type:Number},
    },
    skills:[{
        icon:{type:String},
        name:{type:String},
        description:{type:String},
        tips:{type:String}
     }],
    tailWind:[{type:mongoose.SchemaTypes.ObjectId,ref:"Item"}],
    tailWind:[{type:mongoose.SchemaTypes.ObjectId,ref:"Item"}],
    headwind:[ {type:mongoose.SchemaTypes.ObjectId,ref:"Item"}],
    useTip:{type:String},
    combatTip:{type:String},
    teamTip:{type:String},
    tips:{type:String},
    partener:[ {
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:"Hero",
        description:{type:String}
    
    }]
})

module.exports = mongoose.model("Hero",Schema)
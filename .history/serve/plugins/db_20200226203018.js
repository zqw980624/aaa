module.exports = app => {
    const mogoose = require("mongoose")
    mogoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{useNewUrlParser: true})
    mongoose.connection.on('connected', function () {    
        console.log('Mongoose connection open to ' + DB_URL);  
    }); 
}
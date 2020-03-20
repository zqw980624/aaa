module.exports = app => {
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{ 
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    mongoose.connection.on('connected', function () {    
        console.log('Mongoose connection open to ');  
    }); 
}
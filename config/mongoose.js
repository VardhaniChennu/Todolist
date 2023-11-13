const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost:27017/todos');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));
db.once('open', function(){
    console.log('Connected to Database');
});
module.exports = db;
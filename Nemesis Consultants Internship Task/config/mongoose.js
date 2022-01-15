const mongoose = require('mongoose');
const env = require('./environment');

const DB= 'mongodb+srv://admin:nemesisinternship@cluster0.d7mqw.mongodb.net/nemesis?retryWrites=true&w=majority'

// mongoose.connect(`mongodb://localhost/${env.db}`);
mongoose.connect(DB).then(()=> {
    console.log('cconnection successful')
}).catch((err) => console.log('no connection'));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;
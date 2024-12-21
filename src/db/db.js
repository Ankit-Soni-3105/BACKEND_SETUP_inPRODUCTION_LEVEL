const mongoose = require('mongoose');

module.exports.connectDB=()=>{
     mongoose.connect('mongodb://0.0.0.0/production').then(()=>{
        console.log('Connected to MongoDB');
    }).catch(err=>{
        console.error('Failed to connect to MongoDB',err);
        // process.exit(1);
    });
}
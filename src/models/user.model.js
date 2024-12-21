const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    passwords:{
        type: String,
        required: true,
    }
});

userSchema.statics.hashPassword =async (password) => {
    return bcrypt.hash(password, 10);
}

// userSchema.methods.savePassword = async() => {

// }

userSchema.methods.generateAuthToken = ()=> {
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
}

const userModel = mongoose.model('User', userSchema);
module.exports =userModel;
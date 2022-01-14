const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    
}, {
    timestamps: true
});

const UserDetail = mongoose.model('UserDetail', userDetailSchema);

module.exports = UserDetail;
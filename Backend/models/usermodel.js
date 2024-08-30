const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Manager', 'Staff'], default: 'Staff' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
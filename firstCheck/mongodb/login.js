const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    collegeid: { type: String, require: true },
    access: { type: String, require: true },
    password: { type: String, require: true },
});
const users = mongoose.model('User', userSchema);
module.exports = { users: users };

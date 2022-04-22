const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const db = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});
const User = mongoose.model('User',db);
module.exports = User;

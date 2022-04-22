const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const dudum = new Schema({
    name: {type: String, required: true},
    dob: {type: Date, required: true},
    aadhar: {type: Number, required: true},
    Address: {type: String, required: true}
});
const Emp = mongoose.model('Emp',dudum);
module.exports = Emp;

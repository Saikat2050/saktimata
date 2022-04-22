const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const dbname = new Schema({
    company: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true}
});
const Nam = mongoose.model('Nam',dbname);
module.exports = Nam;

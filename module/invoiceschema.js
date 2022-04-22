const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const dbin = new Schema({
    quantity: {type: Number, required: true},
    description: {type: String, required: true},
    tax_rate: {type: Number, required: true},
    uid: {type: Number, required: true},
    price: {type: Number, required: true}
});
const Race = mongoose.model('Race',dbin);
module.exports = Race;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbBill = new Schema({
    item: {type: String, required: true},
    uid: {type: Number, required: true},
    company: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    unit: {type: String, required: true}
});
const Bill = mongoose.model('Bill',dbBill);
module.exports = Bill;
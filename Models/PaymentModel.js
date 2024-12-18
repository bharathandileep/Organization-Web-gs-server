
const mongoose = require('mongoose');
const paymentschema = require('../Schemas/paymentschema');
const PaymentModel = mongoose.model('payments',paymentschema);// Use the imported schema
module.exports = PaymentModel;

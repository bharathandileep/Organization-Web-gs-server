
const mongoose = require('mongoose');
const kitchenschema = require('../Schemas/kitchenschema');
const KitchenModel = mongoose.model('kitchens', kitchenschema);  // Use the imported schema
module.exports = KitchenModel;

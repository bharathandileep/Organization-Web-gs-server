
const mongoose = require('mongoose');
const foodproductsschema = require('../Schemas/foodproductsschema');
const FoodproductModel = mongoose.model('foodproducts',foodproductsschema);  // Use the imported schema
module.exports = FoodproductModel;

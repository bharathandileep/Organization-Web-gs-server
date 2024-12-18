const mongoose = require('mongoose');
const MenuItemSchema = require('../Schemas/MenuItemsSchema');
const MenuItemModel = mongoose.model('MenuItems',MenuItemSchema);  // Use the imported schema
module.exports =MenuItemModel;
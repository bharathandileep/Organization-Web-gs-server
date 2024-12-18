
const mongoose = require('mongoose');
const AssociatesSchema = require('../Schemas/AssociatesSchema');
const AssociatesModel = mongoose.model('Associates', AssociatesSchema);  // Use the imported schema
module.exports = AssociatesModel;

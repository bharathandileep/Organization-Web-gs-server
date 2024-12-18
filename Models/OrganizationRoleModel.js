
const mongoose = require('mongoose');
const OrganizationRoleSchema = require('../Schemas/OrganizationRoleSchema');
const OrganizationRoleModel = mongoose.model('OrganizationRole', OrganizationRoleSchema);  // Use the imported schema
module.exports = OrganizationRoleModel;

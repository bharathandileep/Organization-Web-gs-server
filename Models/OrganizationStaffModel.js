
const mongoose = require('mongoose');
const OrganizationStaffsSchema = require('../Schemas/OrganizationStaffsSchema');
const OrganizationStaffModel = mongoose.model('OrganizationStaff', OrganizationStaffsSchema);  // Use the imported schema
module.exports = OrganizationStaffModel;

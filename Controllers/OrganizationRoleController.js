
const OrganizationRole = require('../Models/OrganizationRoleModel');

// Function to check for duplicate role_id
const checkDuplicateRoleId = async (role_id) => {
    const existingRole = await OrganizationRole.findOne({ role_id });
    return existingRole ? true : false;
};

// Create a new organization role
exports.createRole = async (req, res) => {
    try {
        const { role_id } = req.body;

        if (await checkDuplicateRoleId(role_id)) {
            return res.status(400).json({ message: 'role_id must be unique' });
        }

        const newRole = new OrganizationRole(req.body);
        const savedRole = await newRole.save();
        res.status(201).json(savedRole);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all organization roles
exports.getAllRoles = async (req, res) => {
    try {
        const roles = await OrganizationRole.find();
        res.json(roles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get an organization role by ID
exports.getRoleById = async (req, res) => {
    try {
        const role = await OrganizationRole.findById(req.params.id);
        if (!role) return res.status(404).json({ message: 'Role not found' });
        res.json(role);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an organization role by ID
exports.updateRoleById = async (req, res) => {
    try {

        

        const updatedRole = await OrganizationRole.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRole) return res.status(404).json({ message: 'Role not found' });
        res.json(updatedRole);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an organization role by ID
exports.deleteRoleById = async (req, res) => {
    try {
        const deletedRole = await OrganizationRole.findByIdAndDelete(req.params.id);
        if (!deletedRole) return res.status(404).json({ message: 'Role not found' });
        res.json({ message: 'Role deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

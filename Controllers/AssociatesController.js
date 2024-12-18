const Associates = require('../Models/AssociatesModel');
const Kitchens = require('../Models/KitchenModel');

// Function to check for duplicate organization_id
const checkDuplicateOrganizationId = async (organization_id) => {
    const existingAssociate = await Associates.findOne({ organization_id });
    return existingAssociate ? true : false;
};

// Function to check if all kitchen_id values exist in the Kitchens collection
const checkValidKitchenIds = async (kitchen_ids) => {
    const validKitchens = await Kitchens.find({ kitchen_id: { $in: kitchen_ids } });
    return validKitchens.length === kitchen_ids.length;
};

// Create a new associate
exports.createAssociate = async (req, res) => {
    try {
        const { organization_id, kitchen_id } = req.body; // Use lowercase 'kitchen_id'

        if (await checkDuplicateOrganizationId(organization_id)) {
            return res.status(400).json({ message: 'organization_id must be unique' });
        }

        if (!Array.isArray(kitchen_id)) {
            return res.status(400).json({ message: 'kitchen_id must be an array' });
        }

        if (!await checkValidKitchenIds(kitchen_id)) {
            return res.status(400).json({ message: 'Invalid kitchen_id(s)' });
        }

        const newAssociate = new Associates(req.body);
        const savedAssociate = await newAssociate.save();
        res.status(201).json(savedAssociate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all associates
exports.getAllAssociates = async (req, res) => {
    try {
        const associates = await Associates.find();
        res.json(associates);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get an associate by ID
exports.getAssociateById = async (req, res) => {
    try {
        const associate = await Associates.findById(req.params.id);
        if (!associate) return res.status(404).json({ message: 'Associate not found' });
        res.json(associate);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an associate by ID
exports.updateAssociateById = async (req, res) => {
    try {
        const { kitchen_id } = req.body;

        if (kitchen_id) {
            if (!Array.isArray(kitchen_id)) {
                return res.status(400).json({ message: 'kitchen_id must be an array' });
            }
            if (!await checkValidKitchenIds(kitchen_id)) {
                return res.status(400).json({ message: 'Invalid kitchen_id(s)' });
            }
        }

        const updatedAssociate = await Associates.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAssociate) return res.status(404).json({ message: 'Associate not found' });
        res.json(updatedAssociate);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an associate by ID
exports.deleteAssociateById = async (req, res) => {
    try {
        const deletedAssociate = await Associates.findByIdAndDelete(req.params.id);
        if (!deletedAssociate) return res.status(404).json({ message: 'Associate not found' });
        res.json({ message: 'Associate deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

};

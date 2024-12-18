// Controllers/OrganizationStaffController.js
const OrganizationStaff = require('../Models/OrganizationStaffModel');
const Kitchen = require('../Models/KitchenModel'); // Assuming you have a Kitchen model

// Function to check for duplicate Organization_staff_id
const checkDuplicateStaffId = async (Organization_staff_id) => {
    const existingStaff = await OrganizationStaff.findOne({ Organization_staff_id });
    return existingStaff ? true : false;
};

// Function to check if kitchen_id exists in the Kitchen collection
const checkValidKitchenId = async (kitchen_id) => {
    const kitchen = await Kitchen.findOne({ kitchen_id });
    return kitchen ? true : false;
};

// Create a new organization staff
exports.createStaff = async (req, res) => {
    try {
        const { Organization_staff_id, kitchen_id } = req.body;

        if (await checkDuplicateStaffId(Organization_staff_id)) {
            return res.status(400).json({ message: 'Organization_staff_id must be unique' });
        }

        if (!await checkValidKitchenId(kitchen_id)) {
            return res.status(400).json({ message: 'Invalid kitchen_id' });
        }

        const newStaff = new OrganizationStaff(req.body);
        const savedStaff = await newStaff.save();
        res.status(201).json(savedStaff);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all organization staffs
exports.getAllStaffs = async (req, res) => {
    try {
        const staffs = await OrganizationStaff.find();
        res.json(staffs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get an organization staff by ID
exports.getStaffById = async (req, res) => {
    try {
        const staff = await OrganizationStaff.findById(req.params.id);
        if (!staff) return res.status(404).json({ message: 'Staff not found' });
        res.json(staff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an organization staff by ID
exports.updateStaffById = async (req, res) => {
    try {
        const { kitchen_id } = req.body;

        if (kitchen_id && !await checkValidKitchenId(kitchen_id)) {
            return res.status(400).json({ message: 'Invalid kitchen_id' });
        }

        const updatedStaff = await OrganizationStaff.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStaff) return res.status(404).json({ message: 'Staff not found' });
        res.json(updatedStaff);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an organization staff by ID
exports.deleteStaffById = async (req, res) => {
    try {
        const deletedStaff = await OrganizationStaff.findByIdAndDelete(req.params.id);
        if (!deletedStaff) return res.status(404).json({ message: 'Staff not found' });
        res.json({ message: 'Staff deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

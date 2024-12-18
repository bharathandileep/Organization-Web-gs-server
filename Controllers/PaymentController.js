// Controllers/PaymentController.js
const Payment = require('../Models/PaymentModel');
const Employee = require('../Models/EmployeesModel'); // Assuming you have an Employee model

// Function to check for duplicate payment_id
const checkDuplicatePaymentId = async (payment_id) => {
    const existingPayment = await Payment.findOne({ payment_id });
    return existingPayment ? true : false;
};

// Function to check if employee_id exists in the Employee collection
const checkValidEmployeeId = async (employee_id) => {
    const employee = await Employee.findOne({ employee_id });
    return employee ? true : false;
};

// Create a new payment
exports.createPayment = async (req, res) => {
    try {
        const { payment_id, employee_id } = req.body;

        if (await checkDuplicatePaymentId(payment_id)) {
            return res.status(400).json({ message: 'payment_id must be unique' });
        }

        if (!await checkValidEmployeeId(employee_id)) {
            return res.status(400).json({ message: 'Invalid employee_id' });
        }

        const newPayment = new Payment(req.body);
        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a payment by ID
exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.json(payment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a payment by ID
exports.updatePaymentById = async (req, res) => {
    try {
        const { employee_id } = req.body;

        if (employee_id && !await checkValidEmployeeId(employee_id)) {
            return res.status(400).json({ message: 'Invalid employee_id' });
        }

        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPayment) return res.status(404).json({ message: 'Payment not found' });
        res.json(updatedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a payment by ID
exports.deletePaymentById = async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        if (!deletedPayment) return res.status(404).json({ message: 'Payment not found' });
        res.json({ message: 'Payment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

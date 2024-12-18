
// const mongoose = require('mongoose'); 
// const OrderDetailModel = require('../models/OrderDetailModel');
// const CustomerModel = require('../Models/EmployeesModel'); // assuming the customer model file is named CustomerModel.js
// const FoodProductModel = require('../Models/FoodProductModel'); // assuming the food product model file is named FoodProductModel.js


// // Check if order_id is unique
// const isOrderIdUnique = async (order_id) => {
//     const existingOrder = await OrderDetailModel.findOne({ order_id });
//     if (existingOrder) {
//         throw new Error('order_id must be unique');
//     }
// };

// // Get all order details
// exports.getAllOrderDetails = async (req, res) => {
//     try {
//         const orderDetails = await OrderDetailModel.find();
//         res.json(orderDetails);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Get a specific order detail by ID
// exports.getOrderDetailById = async (req, res) => {
//     try {
//         const orderDetail = await OrderDetailModel.findById(req.params.id);
//         if (!orderDetail) return res.status(404).json({ message: 'Order detail not found' });
//         res.json(orderDetail);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Add a new order detail
// exports.addOrderDetail = async (req, res) => {
//     try {
//         // Verify foreign keys
//         // Check if order_id is unique
//         // await isOrderIdUnique(req.body.order_id);

//         // Extract and convert order data
//         const { order_id, employee_id, food_id, ...rest } = req.body;

//         // Convert employee_id and food_id to ObjectId using `new`
//         const orderData = {
//             order_id,
//             employee_id: new mongoose.Types.ObjectId(employee_id),
//             food_id: new mongoose.Types.ObjectId(food_id),
//             ...rest
//         };

//         // Create a new order detail instance
//         const newOrderDetail = new OrderDetailModel(orderData);

//         // Save the new order detail
//         const savedOrderDetail = await newOrderDetail.save();

//         // Send response
//         res.status(201).json(savedOrderDetail);
//     } catch (error) {
//         console.error('Error adding order detail:', error.message);
//         res.status(400).json({ message: error.message });
//     }
// };

// // Update a specific order detail by ID
// exports.updateOrderDetailById = async (req, res) => {
//     try {

//         const updatedOrderDetail = await OrderDetailModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedOrderDetail) return res.status(404).json({ message: 'Order detail not found' });
//         res.json(updatedOrderDetail);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// // Delete a specific order detail by ID
// exports.deleteOrderDetailById = async (req, res) => {
//     try {
//         const orderDetail = await OrderDetailModel.findByIdAndDelete(req.params.id);
//         if (!orderDetail) return res.status(404).json({ message: 'Order detail not found' });
//         res.json({ message: 'Order detail deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

const mongoose = require('mongoose'); 
const OrderDetailModel = require('../models/OrderDetailModel');
const { successResponse, errorResponse } = require("../utils/responseFormatter");
const CustomerModel = require('../Models/EmployeesModel'); // assuming the customer model file is named CustomerModel.js
const FoodProductModel = require('../Models/FoodProductModel'); // assuming the food product model file is named FoodProductModel.js

// Check if order_id is unique
const isOrderIdUnique = async (order_id) => {
    const existingOrder = await OrderDetailModel.findOne({ order_id });
    if (existingOrder) {
        throw new Error('order_id must be unique');
    }
};
exports.getAllOrderDetails = async (req, res) => {
    try {
      // Get page and limit from query parameters, with default values
      const page = parseInt(req.query.page, 10) || 1; // Default to page 1
      const limit = parseInt(req.query.limit, 10) || 100; // Default to 4 items per page
      const skip = (page - 1) * limit;
  
      // Count total number of employees
      const totalItems = await OrderDetailModel.countDocuments();
  
      // Fetch the employees for the current page
      const orders = await OrderDetailModel.find().skip(skip).limit(limit);
  
      // Calculate total number of pages
      const totalPages = Math.ceil(totalItems / limit);
  
      // Respond with paginated data
      res.json({
        status: '200 OK',
        message: 'Employees retrieved successfully',
        data: orders,
        pagination: {
          totalItems,
          totalPages,
          currentPage: page,
          itemsPerPage: limit
        }
      });
    } catch (err) {
      res.status(500).json(errorResponse(500, err.message));
    }
  };
  
// // Get all order details
// exports.getAllOrderDetails = async (req, res) => {
//     try {
//         const orderDetails = await OrderDetailModel.find();
//         res.json(successResponse(200, "Order details retrieved successfully", orderDetails));
//     } catch (err) {
//         res.status(500).json(errorResponse(500, err.message));
//     }
// };

// Get a specific order detail by ID
exports.getOrderDetailById = async (req, res) => {
    try {
        const orderDetail = await OrderDetailModel.findById(req.params.id);
        if (!orderDetail) return res.status(404).json(errorResponse(404, 'Order detail not found'));
        res.json(successResponse(200, "Order detail retrieved successfully", orderDetail));
    } catch (err) {
        res.status(500).json(errorResponse(500, err.message));
    }
};

// Add a new order detail
exports.addOrderDetail = async (req, res) => {
    try {
        // Verify foreign keys
        // Check if order_id is unique
        // await isOrderIdUnique(req.body.order_id);

        // Extract and convert order data
        const { order_id, employee_id, food_id, ...rest } = req.body;

        // Convert employee_id and food_id to ObjectId using `new`
        const orderData = {
            order_id,
            employee_id: new mongoose.Types.ObjectId(employee_id),
            food_id: new mongoose.Types.ObjectId(food_id),
            ...rest
        };

        // Create a new order detail instance
        const newOrderDetail = new OrderDetailModel(orderData);

        // Save the new order detail
        const savedOrderDetail = await newOrderDetail.save();

        // Send response
        res.status(201).json(successResponse(201, "Order detail added successfully", savedOrderDetail));
    } catch (error) {
        console.error('Error adding order detail:', error.message);
        res.status(400).json(errorResponse(400, error.message));
    }
};

// Update a specific order detail by ID
exports.updateOrderDetailById = async (req, res) => {
    try {
        const updatedOrderDetail = await OrderDetailModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedOrderDetail) return res.status(404).json(errorResponse(404, 'Order detail not found'));
        res.json(successResponse(200, "Order detail updated successfully", updatedOrderDetail));
    } catch (err) {
        res.status(400).json(errorResponse(400, err.message));
    }
};

// Delete a specific order detail by ID
exports.deleteOrderDetailById = async (req, res) => {
    try {
        const orderDetail = await OrderDetailModel.findByIdAndDelete(req.params.id);
        if (!orderDetail) return res.status(404).json(errorResponse(404, 'Order detail not found'));
        res.json(successResponse(200, "Order detail deleted successfully"));
    } catch (err) {
        res.status(500).json(errorResponse(500, err.message));
    }
};


const Foodproduct = require('../Models/FoodProductModel');
const Kitchen = require('../models/KitchenModel');
const { successResponse, errorResponse } = require("../utils/responseFormatter");

// Get all food products
// exports.getAllFoodproducts = async (req, res) => {
//     try {
//         const foodproducts = await Foodproduct.find();
//         res.json(foodproducts);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };
exports.getAllFoodproducts = async (req, res) => {
    try {
      // Get page and limit from query parameters, with default values
      const page = parseInt(req.query.page, 10) || 1; // Default to page 1
      const limit = parseInt(req.query.limit, 10) || 100; // Default to 4 items per page
      const skip = (page - 1) * limit;
  
      // Count total number of employees
      const totalItems = await Foodproduct.countDocuments();
  
      // Fetch the Foodproduct for the current page
      const employees = await Foodproduct.find().skip(skip).limit(limit);
  
      // Calculate total number of pages
      const totalPages = Math.ceil(totalItems / limit);
  
      // Respond with paginated data
      res.json({
        status: '200 OK',
        message: 'Food Products retrieved successfully',
        data: employees,
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
  
// Get a food product by ID
exports.getFoodproductById = async (req, res) => {
    try {
        const foodproduct = await Foodproduct.findById(req.params.id);
        if (!foodproduct) return res.status(404).json({ message: 'Food product not found' });
        res.json(successResponse(200, "Food Products retrieved successfully", foodproduct));

    } catch (err) {
        res.status(500).json(errorResponse(500, err.message));
    }
};

// Add a new food product
exports.addFoodproduct = async (req, res) => {
    const foodproduct = new Foodproduct(req.body);
    try {
        

        const newFoodproduct = await foodproduct.save();
        res.status(201).json(successResponse(201, "Food Products created successfully", newFoodproduct));
    } catch (err) {
        res.status(400).json(errorResponse(400, err.message));
    }
};

// Update a food product by ID
exports.updateFoodproduct = async (req, res) => {
    try {
        // Check if the kitchen_id exists in the kitchens collection
        // if (req.body.kitchen_id) {
        //     const kitchen = await Kitchen.findOne({ kitchen_id: req.body.kitchen_id });
        //     if (!kitchen) {
        //         return res.status(400).json({ message: 'Invalid kitchen_id' });
        //     }
        // }

        const foodproduct = await Foodproduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!foodproduct) return res.status(404).json({ message: 'Food product not found' });
        res.json(successResponse(200, "Food Product updated successfully", foodproduct));
    } catch (err) {
        res.status(400).json(errorResponse(400, err.message));
    }
};

// Delete a food product by ID
exports.deleteFoodproduct = async (req, res) => {
    try {
        const foodproduct = await Foodproduct.findByIdAndDelete(req.params.id);
       
        if (!foodproduct) return res.status(404).json({ message: 'Food product not found' });
        res.json(successResponse(200, "Food Product deleted successfully"));

    } catch (err) {
        res.status(500).json(errorResponse(500, err.message));
    }
};

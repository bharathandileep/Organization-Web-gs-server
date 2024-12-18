// const mongoose = require('mongoose');
// const Kitchen = require('../Models/KitchenModel')

// // Function to check for duplicate kitchen_id
// const checkDuplicateKitchenId = async (kitchen_id) => {
//     const existingKitchen = await Kitchen.findOne({ kitchen_id });
//     return existingKitchen ? true : false;
// };

// // Create a new kitchen
// exports.createKitchen = async (req, res) => {
//     try {
//         const { kitchen_id } = req.body;

//         // if (await checkDuplicateKitchenId(kitchen_id)) {
//         //     return res.status(400).json({ message: 'kitchen_id must be unique' });
//         // }

//         const newKitchen = new Kitchen(req.body);
//         const savedKitchen = await newKitchen.save();
//         res.status(201).json(savedKitchen);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };


// // Get all food products with pagination
// // exports.getAllFoodproducts = async (req, res) => {
// //     try {
// //         const { page = 1, limit = 8 } = req.query;
// //         const skip = (page - 1) * limit;
 
// //         const foodproducts = await Foodproduct.find()
// //             .skip(parseInt(skip))
// //             .limit(parseInt(limit))
// //             .exec();
 
// //         const totalFoodproducts = await Foodproduct.countDocuments();
 
// //         res.json({
// //             status: '200 Ok',
// //             message: 'Food products retrieved successfully',
// //             foodproducts,
// //             pagination: {
// //                 totalItems: totalFoodproducts,
// //                 totalPages: Math.ceil(totalFoodproducts / limit),
// //                 currentPage: parseInt(page),
// //             },
// //         });
// //     } catch (err) {
// //         res.status(500).json({ message: err.message });
// //     }
// // };
// // exports.getAllKitchens = async (req, res) => {
// //   try {
// //     const { page = 1, limit = 6 } = req.query;
// //     const skip = (page - 1) * limit;

// //     const kitchens = await Kitchen.find()
// //       .skip(parseInt(skip))
// //       .limit(parseInt(limit))
// //       .exec();

// //     const totalKitchens = await Kitchen.countDocuments();

// //     console.log('Kitchens:', kitchens); // Log kitchens data
// //     console.log('Total Kitchens:', totalKitchens); // Log total count

// //     res.json({
// //       status: '200 Ok',
// //       message: 'Kitchens retrieved successfully',
// //       data: { // Ensure kitchens are nested inside the data object
// //         kitchens,
// //         totalItems: totalKitchens,
// //         totalPages: Math.ceil(totalKitchens / limit),
// //         currentPage: parseInt(page),
// //       },
// //     });
// //   } catch (err) {
// //     console.error('Error:', err.message); // Log error if it occurs
// //     res.status(500).json({ message: err.message });
// //   }
// // };
  
// // Get all kitchens
// exports.getAllKitchens = async (req, res) => {
//      try {
     
// //             const { page = 1, limit = 6 } = req.query;
// //             const skip = (page - 1) * limit;
     
// //             const kitchens = await Kitchen.find()

// //                 .skip(parseInt(skip))
// //                 .limit(parseInt(limit))
// //                 .exec();
     
// //             const totalKitchens = await Kitchen.countDocuments();
     
// //             res.json({
// //                 status: '200 Ok',
// //                 message: 'Kitchen retrieved successfully',
// //                 kitchens,
// //                 data: {
// //                     totalItems: totalKitchens,
// //                     totalPages: Math.ceil(totalKitchens / limit),
// //                     currentPage: parseInt(page),
// //                 },
// //             });
// //         } catch (err) {
// //             res.status(500).json({ message: err.message });
// //         }
    
//         const kitchens = await Kitchen.find();
//         res.status(200).json(kitchens);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// // Get a specific kitchen by ID
// exports.getKitchenById = async (req, res) => {
//     try {
//         const kitchen = await Kitchen.findById(req.params.id);
//         if (!kitchen) {
//             return res.status(404).json({ message: 'Kitchen not found' });
//         }
//         res.status(200).json(kitchen);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Update a specific kitchen by ID
// exports.updateKitchen = async (req, res) => {
//     try {
//         const { kitchen_id } = req.body;

//         // Check if the kitchen_id already exists in another document
//         const existingKitchen = await Kitchen.findOne({ kitchen_id });
//         if (existingKitchen && existingKitchen._id.toString() !== req.params.id) {
//             return res.status(400).json({ message: 'kitchen_id must be unique' });
//         }

//         const updatedKitchen = await Kitchen.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedKitchen) {
//             return res.status(404).json({ message: 'Kitchen not found' });
//         }
//         res.status(200).json(updatedKitchen);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Delete a specific kitchen by ID
// exports.deleteKitchen = async (req, res) => {
//     try {
//         const id = req.params.id;
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: 'Invalid ID format' });
//         }

//         const deletedKitchen = await Kitchen.findByIdAndDelete(id);
//         if (!deletedKitchen) {
//             return res.status(404).json({ message: 'Kitchen not found' });
//         }
//         res.status(200).json({ message: 'Kitchen deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
// const mongoose = require('mongoose');
// const Kitchen = require('../Models/KitchenModel');
// const { successResponse, errorResponse } = require('../utils/responseFormatter');

// // // Function to check for duplicate kitchen_id
// // const checkDuplicateKitchenId = async (kitchen_id) => {
// //     const existingKitchen = await Kitchen.findOne({ kitchen_id });
// //     return existingKitchen ? true : false;
// // };

// // Create a new kitchen
// exports.createKitchen = async (req, res) => {
//     try {
//         const { kitchen_id } = req.body;

      

//         const newKitchen = new Kitchen(req.body);
//         const {savedKitchen }= await newKitchen.save();
//         res.status(201).json(successResponse(201, 'Kitchen created successfully', savedKitchen));
//     } catch (error) {
//         res.status(400).json(errorResponse(400, error.message));
//     }
// };

// // // Get all kitchens with pagination
// // exports.getAllKitchens = async (req, res) => {
// //     try {
// //         // const { page = 1, limit = 6 } = req.query;
// //         // const skip = (page - 1) * limit;

// //         // const kitchens = await Kitchen.find()
// //         //     .skip(parseInt(skip))
// //         //     .limit(parseInt(limit))
// //         //     .exec();

// //         // const totalKitchens = await Kitchen.countDocuments();
// //         const kitchens = await Kitchen.find();

// //         res.status(200).json(successResponse(200, 'Kitchens retrieved successfully', {kitchens}));
// //     } catch (error) {
// //         res.status(500).json(errorResponse(500, error.message));
// //     }
// // };
// // Get all kitchens
// exports.getAllKitchens = async (req, res) => {
//     try {
//         const kitchens = await Kitchen.find().exec();
//         res.status(200).json(successResponse(200, 'Kitchens retrieved successfully',  kitchens ));
//     } catch (error) {
//         res.status(500).json(errorResponse(500, error.message));
//     }
// };

// // Get a specific kitchen by ID
// exports.getKitchenById = async (req, res) => {
//     try {
//         const kitchen = await Kitchen.findById(req.params.id);
//         if (!kitchen) {
//             return res.status(404).json(errorResponse(404, 'Kitchen not found'));
//         }
//         res.status(200).json(successResponse(200, 'Kitchen retrieved successfully', kitchen));
//     } catch (error) {
//         res.status(500).json(errorResponse(500, error.message));
//     }
// };

// // Update a specific kitchen by ID
// exports.updateKitchen = async (req, res) => {
//     try {
//         const { kitchen_id } = req.body;

//         const existingKitchen = await Kitchen.findOne({ kitchen_id });
//         if (existingKitchen && existingKitchen._id.toString() !== req.params.id) {
//             return res.status(400).json(errorResponse(400, 'kitchen_id must be unique'));
//         }

//         const updatedKitchen = await Kitchen.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedKitchen) {
//             return res.status(404).json(errorResponse(404, 'Kitchen not found'));
//         }
//         res.status(200).json(successResponse(200, 'Kitchen updated successfully', updatedKitchen));
//     } catch (error) {
//         res.status(400).json(errorResponse(400, error.message));
//     }
// };

// // Delete a specific kitchen by ID
// exports.deleteKitchen = async (req, res) => {
//     try {
//         const id = req.params.id;
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json(errorResponse(400, 'Invalid ID format'));
//         }

//         const deletedKitchen = await Kitchen.findByIdAndDelete(id);
//         if (!deletedKitchen) {
//             return res.status(404).json(errorResponse(404, 'Kitchen not found'));
//         }
//         res.status(200).json(successResponse(200, 'Kitchen deleted successfully'));
//     } catch (error) {
//         res.status(500).json(errorResponse(500, error.message));
//     }
// };


const mongoose = require('mongoose');
const Kitchen = require('../Models/KitchenModel');
const { successResponse, errorResponse } = require('../utils/responseFormatter');

// Create a new kitchen
exports.createKitchen = async (req, res) => {
    try {
        const newKitchen = new Kitchen(req.body);
        const savedKitchen = await newKitchen.save();
        res.status(201).json(successResponse(201, 'Kitchen created successfully', savedKitchen));
    } catch (error) {
        res.status(400).json(errorResponse(400, error.message));
    }
};

exports.getAllKitchens = async (req, res) => {
    try {
      // Get page and limit from query parameters, with default values
      const page = parseInt(req.query.page, 10) || 1; // Default to page 1
      const limit = parseInt(req.query.limit, 10) || 10; // Default to 4 items per page
      const skip = (page - 1) * limit;
  
      // Count total number of employees
      const totalItems = await Kitchen.countDocuments();
  
      // Fetch the employees for the current page
      const kitchens = await Kitchen.find().skip(skip).limit(limit);
  
      // Calculate total number of pages
      const totalPages = Math.ceil(totalItems / limit);
  
      // Respond with paginated data
      res.json({
        status: '200 OK',
        message: 'Kitchens retrieved successfully',
        data: kitchens,
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
  
// // Get all kitchens with pagination
// exports.getAllKitchens = async (req, res) => {
//     try {
//         const kitchens = await Kitchen.find().exec();
//         res.status(200).json(successResponse(200, 'Kitchens retrieved successfully',kitchens ));
//     } catch (error) {
//         res.status(500).json(errorResponse(500, error.message));
//     }
// };

// Get a specific kitchen by ID
exports.getKitchenById = async (req, res) => {
    try {
        const kitchen = await Kitchen.findById(req.params.id);
        if (!kitchen) {
            return res.status(404).json(errorResponse(404, 'Kitchen not found'));
        }
        res.status(200).json(successResponse(200, 'Kitchen retrieved successfully', kitchen));
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
};

// Update a specific kitchen by ID
exports.updateKitchen = async (req, res) => {
    try {
        const updatedKitchen = await Kitchen.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedKitchen) {
            return res.status(404).json(errorResponse(404, 'Kitchen not found'));
        }
        res.status(200).json(successResponse(200, 'Kitchen updated successfully', updatedKitchen));
    } catch (error) {
        res.status(400).json(errorResponse(400, error.message));
    }
};

// Delete a specific kitchen by ID
exports.deleteKitchen = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json(errorResponse(400, 'Invalid ID format'));
        }

        const deletedKitchen = await Kitchen.findByIdAndDelete(id);
        if (!deletedKitchen) {
            return res.status(404).json(errorResponse(404, 'Kitchen not found'));
        }
        res.status(200).json(successResponse(200, 'Kitchen deleted successfully'));
    } catch (error) {
        res.status(500).json(errorResponse(500, error.message));
    }
};

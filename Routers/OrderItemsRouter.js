// routes/OrderItemsRouter.js

const express = require('express');
const router = express.Router();
const OrderItemsController = require('../Controllers/OrderItemsController');

router.get('/', OrderItemsController.getAllOrderItems);
router.get('/:id', OrderItemsController.getOrderItemById);
router.post('/', OrderItemsController.addOrderItem);
router.put('/:id', OrderItemsController.updateOrderItem);
router.delete('/:id', OrderItemsController.deleteOrderItem);

module.exports = router;

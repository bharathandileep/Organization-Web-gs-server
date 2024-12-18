const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
require('dotenv').config();  // Load environment variables from .env file
const cors = require('cors');

const associatesRoutes = require('./Routers/AssociatesRouter');
const employeesRoutes = require('./Routers/EmployeesRouter');
const organizationRoleRoutes = require('./Routers/organizationRoleRouter');
const organizationStaffRoutes = require('./Routers/OrganizationStaffRouter');
const menuRoutes = require('./Routers/MenuRouter');
const menuItemsRoutes = require('./Routers/MenuItemsRouter');
const orderDetailsRoutes = require('./Routers/OrderDetailsRouter');
const orderItemsRoutes = require('./Routers/OrderItemsRouter');
const kitchenRoutes = require('./Routers/KitchenRouter');
const paymentRoutes = require('./Routers/PaymentRouter');
const foodProductsRoutes = require('./Routers/foodProductsRouter');


const app = express();
// Enable CORS for all routes
app.use(cors());

const port = process.env.PORT || 5000; 

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/associates', associatesRoutes);
app.use('/api/employee', employeesRoutes);
app.use('/api/organizationrole', organizationRoleRoutes);
app.use('/api/organizationstaff', organizationStaffRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/menuitems', menuItemsRoutes);
app.use('/api/orderdetails', orderDetailsRoutes);
app.use('/api/orderitems', orderItemsRoutes);
app.use('/api/kitchen', kitchenRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/foodproducts', foodProductsRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


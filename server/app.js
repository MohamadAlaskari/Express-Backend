// Importing necessary modules
const express = require('express');
const cors = require('cors');

// Importing custom modules
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
// Uncomment these if you are using MongoDB and MySQL
// const dbMongo = require('./config/dbMongo');
// const dbMySQL = require('./config/dbMySQL');

// Initialize Express app
const app = express();

// Middleware
// To parse JSON bodies
app.use(express.json());

// Enabling CORS for all requests (adjust as needed for security)
app.use(cors());

// Setup routes
// Using imported routes from the 'routes' directory
app.use('', routes);

// Centralized error handling
// This middleware will handle any errors thrown or passed via next() in the app
app.use(errorHandler);

// Database connection (Uncomment if you have database configurations)
// dbMongo.connect(); // Connect to MongoDB
// dbMySQL.connect(); // Connect to MySQL

// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/ 🔥`);
});

// server.js
require('dotenv').config(); // Load variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the connection string from .env
mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Import and use routes
const portfolioRoutes = require('./routes/portfolio');
const contactRoutes = require('./routes/contact');
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);

// Start the server using the port from .env
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

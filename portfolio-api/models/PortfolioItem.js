// models/PortfolioItem.js
const mongoose = require('mongoose');

const PortfolioItemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  altText: { type: String, required: true },
  // Add any additional fields as needed
});

module.exports = mongoose.model('PortfolioItem', PortfolioItemSchema);

// routes/portfolio.js
const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/PortfolioItem');

// GET all portfolio items
router.get('/', async (req, res) => {
  try {
    const items = await PortfolioItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// (Optional) POST a new portfolio item
router.post('/', async (req, res) => {
  const { category, imageUrl, altText } = req.body;
  const newItem = new PortfolioItem({ category, imageUrl, altText });
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

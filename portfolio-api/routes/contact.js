// routes/contact.js
const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

// Optional: GET route for testing
router.get('/', (req, res) => {
  res.send('Contact API is working. Please use POST to submit a message.');
});

// POST route for form submissions
router.post('/', async (req, res) => {
  const { email, subject, message } = req.body;
  
  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }
  
  try {
    const newMessage = new ContactMessage({ email, subject, message });
    const savedMessage = await newMessage.save();
    res.status(201).json({ message: 'Message received successfully.', data: savedMessage });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;

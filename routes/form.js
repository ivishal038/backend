const express = require('express');
const router = express.Router();
const FormEntry = require('../models/FormEntry');

// POST - store form data
router.post('/', async (req, res) => {
  try {
    const form = new FormEntry(req.body);
    await form.save();
    res.status(201).json({ success: true, message: 'Form submitted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

module.exports = router;

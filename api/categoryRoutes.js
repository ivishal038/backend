const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

router.get('/:serviceId', async (req, res) => {
  const categories = await Category.find({ serviceId: req.params.serviceId });
  res.json(categories);
});

router.post('/', async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
});

module.exports = router;

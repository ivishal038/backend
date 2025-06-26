const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/:categoryId', async (req, res) => {
  const items = await Item.find({ categoryId: req.params.categoryId });
  res.json(items);
});

router.post('/', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
});

module.exports = router;

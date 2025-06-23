const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const serviceRoutes = require('./routes/serviceRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const itemRoutes = require('./routes/itemRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use('/services', serviceRoutes);
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);

// Replace with your MongoDB URI
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Example Schema
const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String
});

const Service = mongoose.model('Service', ServiceSchema);

// API: Get all services
app.get('/services', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

// API: Add new service
app.post('/services', async (req, res) => {
  const newService = new Service(req.body);
  await newService.save();
  res.status(201).json(newService);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

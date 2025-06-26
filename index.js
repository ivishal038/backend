const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const serviceRoutes = require('./routes/services');
const categoryRoutes = require('./routes/categories');
const itemRoutes = require('./routes/items');
const blogRoutes = require('./routes/blogs');
const formRoutes = require('./routes/form');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/services', serviceRoutes);
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);
app.use('/blogs', blogRoutes);
app.use('/form', formRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Local'))
.catch(err => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app
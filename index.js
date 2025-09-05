const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Import cors
const applicationRoutes = require('./routes/applications');

dotenv.config(); // Load env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());          // <-- ADD THIS
app.use(express.json());

// Routes
app.use('/api/applications', applicationRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });

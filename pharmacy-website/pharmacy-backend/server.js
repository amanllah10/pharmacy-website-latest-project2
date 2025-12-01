const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// ------------------------
// MongoDB Connection
// ------------------------
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
});

// ------------------------
// Basic Route
// ------------------------
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// ------------------------
// API Routes
// ------------------------
app.use("/api/users", require("./routes/apiuser"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// ------------------------
// Start Server
// ------------------------
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


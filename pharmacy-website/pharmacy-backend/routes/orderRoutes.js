const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // capital O

// GET /api/orders - sab orders dekhne ke liye
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        console.error("Fetch orders error:", err);
        res.status(500).json({ message: err.message });
    }
});

// POST /api/orders - naya order create karne ke liye
router.post("/", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        console.error("Order creation error:", err);
        res.status(500).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        if (!deletedOrder) return res.status(404).json({ message: 'Order not found' });
        res.json({ message: 'Order deleted successfully' });
    } catch(err){
        console.error('Delete order error:', err);
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;

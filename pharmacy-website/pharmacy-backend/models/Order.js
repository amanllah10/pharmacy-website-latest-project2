const mongoose = require("mongoose");

// ===================== Order Schema =====================
const orderSchema = new mongoose.Schema(
  {
    user: {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, lowercase: true },
      phone: { type: String, required: true, trim: true },
      address: { type: String, required: true, trim: true },
    },

    items: [
      {
        name: { type: String, required: true, trim: true },
        image: { type: String, default: "" },
        price: { type: Number, required: true, min: 0 },
        quantity: { type: Number, required: true, min: 1 },
      }
    ],

    total: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true } // <--- createdAt + updatedAt enabled
);


// ===================== Date Formatter =====================
function formatDate(date) {
  let d = new Date(date);
  return d.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}


// ===================== Auto Format JSON Output =====================
orderSchema.set("toJSON", {
  transform: function (doc, ret) {
    if (ret.createdAt) ret.createdAt = formatDate(ret.createdAt);
    if (ret.updatedAt) ret.updatedAt = formatDate(ret.updatedAt);
    return ret;
  }
});


module.exports = mongoose.model("Order", orderSchema);

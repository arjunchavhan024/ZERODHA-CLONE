const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrderModel = mongoose.model("Order", OrdersSchema);

module.exports = { OrderModel }; // ✅ export as OrderModel

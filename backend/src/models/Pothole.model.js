const mongoose = require("mongoose");
const { Schema } = mongoose;

const potholeSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  Image: { type: String, required: true },
  Address: { type: String, required: true },
  Verified: { type: Boolean, default: false },
  Landmark: { type: String, required: true },
  by: { type: Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("pothole", potholeSchema);
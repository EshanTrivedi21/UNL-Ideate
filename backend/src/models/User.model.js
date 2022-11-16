const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  Username: { type: String, unique: true, required: true },
  Phone: { type: Number, unique: true },
  Password: { type: String, required: true },
  token: { type: String },
  CreatedAt: { type: Date, default: Date.now },
  reward: { type: Number, default: 0 },
  eContacts: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

module.exports = mongoose.model("user", userSchema);
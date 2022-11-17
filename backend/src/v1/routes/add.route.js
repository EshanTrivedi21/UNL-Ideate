const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const User = require("../../models/User.model");

router.post("/pothole", authCheck, async (req, res, next) => {
    try {
        const { lat, lng , Image, Address, Landmark} = req.body;
        const user = req.user;
    } catch (err) {
    }
});

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const User = require("../../models/User.model");
const PotholeModel = require("../../models/Pothole.model");

router.post("/potholeGeo",authCheck, async (req, res, next) => {
    try{
        PotholeModel.find({},{lat:1,lng:1,_id:0}).then((data)=>{
            res.status(200).json(data);
        })
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
});
module.exports = router;

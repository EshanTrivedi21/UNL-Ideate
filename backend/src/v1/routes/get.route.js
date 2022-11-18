const express = require("express");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
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
router.post("/user",authCheck, async (req, res, next) => {
    if(req.user){
        console.log(req.user);
        res.status(200).json({err: null});
    }else{
        res.status(400).json({err:"User not found"});
    }
})
module.exports = router;

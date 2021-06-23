const express = require('express');
const router = express.Router();
const dealsservice = require('../service /users');



router.get('/deals',async(req,res,next)=>{
    try{
        let dealsArray = await dealsservice.getAllDeals();
        res.json(dealsArray);
    }catch(err){
        next(err);
    }
})




module.exports = router;
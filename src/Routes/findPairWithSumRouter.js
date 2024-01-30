const express = require('express');
const findPairWithSumRouter=express.Router();
const findPairWithSumHandler = require('../handler/findPairWithSumHandler');

//Calls the handler
findPairWithSumRouter.get('/',(req,res)=>{
    findPairWithSumHandler(req,res);
});

module.exports=findPairWithSumRouter;
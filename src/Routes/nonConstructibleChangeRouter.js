const express = require('express');
const nonConstructibleChangeRouter=express.Router();
const nonConstructibleChangeHandler = require('../handler/nonConstructibleChangeHandler');

//Calls the handler
nonConstructibleChangeRouter.get('/',(req,res)=>{
    nonConstructibleChangeHandler(req,res);
});

module.exports=nonConstructibleChangeRouter;
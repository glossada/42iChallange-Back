const { Router } = require('express');
const findPairWithSumRouter = require('./findPairWithSumRouter');
const nonConstructibleChangeRouter = require('./nonConstructibleChangeRouter');


const router = Router();

//define an endpoint and assign a router
router.use('/pairwithSum', findPairWithSumRouter);
router.use('/nonconstructiblechange', nonConstructibleChangeRouter);





module.exports = router;

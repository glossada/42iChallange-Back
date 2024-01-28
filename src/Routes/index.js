const { Router } = require('express');
const findPairWithSumRouter = require('./findPairWithSumRouter');
const nonConstructibleChangeRouter = require('./nonConstructibleChangeRouter');


const router = Router();

router.use('/pairwithSum', findPairWithSumRouter);
router.use('/nonconstructiblechange', nonConstructibleChangeRouter);





module.exports = router;

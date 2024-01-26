const { Router } = require('express');
const findPairWithSumRouter = require('./findPairWithSumRouter');


const router = Router();

router.use('/PairWithSum', findPairWithSumRouter);





module.exports = router;

const findPairWithSumController = require('../controller/findPairWithSumController')

const findPairWithSumHandler = async(req, res)=>{
    const {numbers,targetSum}=req.body;
    console.log(numbers);
    try {
      const result= findPairWithSumController(numbers, targetSum);
      if(!result){
        res.status(400).json('Error: Result not found');
      }else{
        res.status(200).json(result);
      }
    } catch (error) {
        res.status(500).json('Error: ' + error.message);
    }
}

module.exports=findPairWithSumHandler;
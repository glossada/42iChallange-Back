const findPairWithSumController = require('../controller/findPairWithSumController')

//resive de parameters from the query parse them, execute the controller, get the result and response with a status and the result
const findPairWithSumHandler = async(req, res)=>{
  const numbers = req.query.numbers;
  const targetSum = req.query.targetSum;
  const numbersArray = numbers.split(',').map(Number);
  const targetSumNumber = Number(targetSum);
    try {
      const result= findPairWithSumController(numbersArray, targetSumNumber);
      console.log(result)
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
const findPairWithSumController = require('../controller/findPairWithSumController')

const findPairWithSumHandler = async(req, res)=>{
  const numbers = req.query.numbers;
  const targetSum = req.query.targetSum;
  const numbersArray = numbers.split(',').map(Number);
  const targetSumNumber = Number(targetSum);
    console.log(numbersArray);
    console.log(targetSumNumber);
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
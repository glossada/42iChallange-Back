const nonConstructibleChangeController = require('../controller/nonConstructibleChangeController')

//resive de parameters from the query parse them, execute the controller, get the result and response with a status and the result
const nonConstructibleChangeHandler = (req, res) =>{
    const coins = req.query.coins;
    const coinsArray = coins.split(',').map(Number);
    try {
      const result= nonConstructibleChangeController(coinsArray);
      if(!result){
        res.status(400).json('Error: Result not found');
      }else{
        res.status(200).json(result);
      }
    } catch (error) {
        res.status(500).json('Error: ' + error.message);
    }
}

module.exports=nonConstructibleChangeHandler;
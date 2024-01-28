const nonConstructibleChangeController = require('../controller/nonConstructibleChangeController')

const nonConstructibleChangeHandler = (req, res) =>{
    const {coins}=req.body;
    try {
      const result= nonConstructibleChangeController(coins);
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
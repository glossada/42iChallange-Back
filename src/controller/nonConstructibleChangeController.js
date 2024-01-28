const nonConstructibleChangeController = (coins)=> {
    coins.sort((a, b) => a - b);

    let currentChange = 0;

    for (let coin of coins) {
        if (coin > currentChange + 1) {
            return currentChange + 1;
        }
        currentChange += coin;
    }
    return currentChange + 1;
}

module.exports=nonConstructibleChangeController;
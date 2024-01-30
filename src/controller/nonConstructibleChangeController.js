//here is the logic of the challenge, returns the minimum amount of change that you cannot create with the given array of coins.
const nonConstructibleChangeController = (coins)=> {
    if (coins.some(coin => coin < 0)) {
        throw new Error("There are negative values in the array");
    }

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
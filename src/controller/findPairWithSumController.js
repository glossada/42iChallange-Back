
//here is the logic of the challenge, find whether there's a pair of numbers in the array that adds up to the target sum.
//Return the pair in an array. If such pair does not exist, return an empty array.
const findPairWithSumController = (numbers, targetSum) =>{
    const seenNumbers = [];

    if (!Array.isArray(numbers) || !Number.isInteger(targetSum)) {
        throw new Error('first parameter must be an array & second parameter must be an integer.');
    }

    for (let num of numbers) {
        if (typeof num !== 'number' || isNaN(num)) {
            throw new Error('numbers must only contain integers.');
        }

        const complement = targetSum - num;
        if (seenNumbers.includes(complement)) {
            return [complement, num];
        }

        if (seenNumbers.includes(num)) {
            throw new Error(`numbers cant contain repetitive numbers.`);
        }

        seenNumbers.push(num);
    }

    return [];
}

module.exports=findPairWithSumController;
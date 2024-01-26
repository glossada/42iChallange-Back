const findPairWithSumController = (numbers, targetSum) =>{
    const numSet = new Set();

    for (let num of numbers) {
        const complement = targetSum - num;
        if (numSet.has(complement)) {
            return [complement, num];
        }
        numSet.add(num);
    }

    return [];
}

module.exports=findPairWithSumController;
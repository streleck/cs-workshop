function candies(n, arr){
    
    let isDistributionCorrect = false;
    let candiesGiven = [];
    for (let i = 0; i < arr.length; i++){
        candiesGiven[i] = 1;
    }
    while (!isDistributionCorrect) {
        isDistributionCorrect = true;
        for (let i = 0; i < arr.length; i++){
            if (i > 0) {
                if (arr[i] > arr[i - 1] && candiesGiven[i] <= candiesGiven[i-1]) {
                    candiesGiven[i] = candiesGiven[i - 1] + 1;
                    isDistributionCorrect = false;
                }
            }
            if (i < arr.length-1) {
                if (arr[i] > arr[i + 1] && candiesGiven[i] <= candiesGiven[i + 1]) {
                    candiesGiven[i] = candiesGiven[i + 1] + 1;
                    isDistributionCorrect = false;
                }
            }   
        }
    }   
    let totalCandies = candiesGiven.reduce((accumulator, current) => {
        return accumulator + current;
    })
    return totalCandies;
}




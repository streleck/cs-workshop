function getDigit(num, digitPlace){
  return(Math.floor(num / (10 ** digitPlace)) % 10);
}

function getNumDigits(num){
  return 1 + Math.floor(Math.log10(num));
}


function getMaxDigits(arr){
  return arr.reduce((accumulator, currentValue) => {
    if(getNumDigits(currentValue) > accumulator){
      return getNumDigits(currentValue) ;
    }
    else {
      return accumulator;
    }
  });
}



function radixSort(arr){
  let numLoops = getMaxDigits(arr);
  for(let i=0; i<numLoops; i++){
    let buckets = [[],[],[],[],[],[],[],[],[],[]];
    for(let item of arr){
      buckets[getDigit(item, i)].push(item);
    }
    arr = buckets[0].concat(buckets[1]).concat(buckets[2]).concat(buckets[3]).concat(buckets[4]).concat(buckets[5]).concat(buckets[6]).concat(buckets[7]).concat(buckets[8]).concat(buckets[9]);
  }
  return arr;
}




console.log(radixSort([3,7,2,346,67,12,63,12,976,231,111,22222,3, 54]))
/*





*/
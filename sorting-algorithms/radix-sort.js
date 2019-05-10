const LinkedList = require('../data-structures/linked-list');

function getDigit(num, digitPlace){
  return(Math.floor(num / (10 ** digitPlace)) % 10);
}

function getNumDigits(num){
  return 1 + Math.floor(Math.log10(num));
}


function getMaxDigits(list){
  return list.reduce((accumulator, currentValue) => {
    if(getNumDigits(currentValue) > accumulator){
      return getNumDigits(currentValue) ;
    }
    else {
      return accumulator;
    }
  });
}



function radixSort(list){
  let numLoops = getMaxDigits(list);
  for(let i=0; i<numLoops; i++){
    let buckets = new LinkedList();
    for(let i=0; i<10; i++){
      buckets.push(new LinkedList());
    }
    for(let j=0; j<list.length; j++){
      let num = list.get(j);
      buckets.get(getDigit(num, i)).push(num);
    }
    list = buckets.get(0).concat(buckets.get(1)).concat(buckets.get(2)).concat(buckets.get(3)).concat(buckets.get(4)).concat(buckets.get(5)).concat(buckets.get(6)).concat(buckets.get(7)).concat(buckets.get(8)).concat(buckets.get(9));
  }
  return list;
}

module.exports = radixSort;
function countLteElements(arr, value) {
  let leftPointer = 0;
  let rightPointer = arr.length-1;
  let checkIndex;
  while (true){
      if(rightPointer === 0){
        return 0;
      }
      if(leftPointer === arr.length-2){
        return arr.length;
      }
      checkIndex = Math.floor((leftPointer + rightPointer) / 2);
      if (arr[checkIndex] > value) {
          rightPointer = checkIndex;
      }
      else if (arr[checkIndex + 1] > value) {
          return checkIndex +1;
      }
      else{
        leftPointer = checkIndex;
      }
  }
}


console.log(countLteElements([3,4,6,7,7,7,8,9,10,11,13], 3));
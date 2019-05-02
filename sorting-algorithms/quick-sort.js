function findPivotIndex(arr){
  let pivot = arr[0];
  let pivotIndex = 0;
  for(let i=1; i<arr.length; i++){
    if(arr[i]<pivot){
      arr = swap(arr, i, pivotIndex + 1);
      pivotIndex++;
    }
  }
  return pivotIndex;
}

function swap(arr, index1, index2){
  let storedValue = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = storedValue;
  return arr;
}




console.log(findPivotIndex([6, 5, 7, 1, 2, 4]));
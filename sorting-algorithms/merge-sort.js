// merges two sorted arrays
function sortTwo(arr1, arr2){
  const mergedArr = new Array(arr1.length + arr2.length);
  for(let i = mergedArr.length-1; i >= 0; i--){
    if(arr1.length === 0){
      mergedArr[i] = arr2.pop();
    }
    else if(arr2.length === 0){
      mergedArr[i] = arr1.pop();
    }
    else if(arr2[arr2.length-1] > arr1[arr1.length-1]){
      mergedArr[i] = arr2.pop();
    }
    else{
      mergedArr[i] = arr1.pop();
    }
  }
  return mergedArr;
};

function splitArray(arr){
  if(arr.length <= 1){
    return arr;
  }
  else{
    return [splitArray(arr.slice(0, Math.ceil(arr.length/2))), splitArray(arr.slice(Math.ceil(arr.length/2)))]
  }
};

function merge(arr){
  if(Array.isArray(arr[0][0])){
    arr[0] = merge(arr[0][0], arr[0][1]);
  }
  if(Array.isArray(arr[1][0])){
    arr[1] = merge(arr[1][0], arr[1][1]);
  }
  return sortTwo(arr[0], arr[1])
}


console.log(mergeSort([3,4,3,6,2,8,2,5,3,7,8,8,8,2,43,124,54,124,65,12,52,762,5,83,32,1,3,5241,3]));
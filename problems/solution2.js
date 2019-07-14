function candies(n, arr){

  let valleys = findValleys(arr);
  let candiesGiven = [];

  for(let i=0; i<valleys.length; i++){
      candiesGiven = climbLeft(arr, candiesGiven, valleys[i]);
      candiesGiven = climbRight(arr, candiesGiven, valleys[i]);
  }

  let totalCandies = candiesGiven.reduce((accumulator, current) => {
    return accumulator + current;
  })
  return totalCandies;
  
  function findValleys(arr){
      let valleys = [];
      if(arr[0] <= arr[1]){
          valleys.push(0);
      }
      for(let i=1;i<arr.length-1;i++){
          if(arr[i] <= arr[i-1] && arr[i] <= arr[i+1]){
              valleys.push(i);
          }
      }
      if(arr[arr.length-1] <= arr[arr.length-2]){
          valleys.push(arr.length-1);
      }
      return valleys;
  }

  function climbLeft(arr, candiesGiven, index){
      candiesGiven[index] = 1;
      for(let i=index-1; i>=0; i--){
          if(arr[i] > arr[i+1]){
              if(!(candiesGiven[i] > candiesGiven[i+1] + 1)){
                  candiesGiven[i] = candiesGiven[i+1] + 1;
              }
          }
          else{
              break;
          }
      }
      return candiesGiven;
  }

  function climbRight(arr, candiesGiven, index){
      candiesGiven[index] = 1;
      for(let i=index+1; i<arr.length; i++){
          if(arr[i] > arr[i-1]){
              if(!(candiesGiven[i] > candiesGiven[i-1] + 1)){
                  candiesGiven[i] = candiesGiven[i-1] + 1;
              }
          }
          else{
              break;
          }
      }
      return candiesGiven;
  }
}
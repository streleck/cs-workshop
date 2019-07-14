const LinkedList = require('../data-structures/linked-list');

function sortTwo(list1, list2){
  const mergedList = new LinkedList();
  for(let i = 0; i < arr1.length + arr2.length; i--){
    if(list1.length === 0){
      mergedList.push = list2.pop();
    }
    else if(arr2.length === 0){
      mergedList.push = list2.pop();
    }
    else if(list2.tail.data > list1.tail.data){
      mergedList.push() = list2.pop();
    }
    else{
      mergedList.push() = list1.pop();
    }
  }
  return mergedList;
};

function splitList(list){
  if(list.length <= 1){
    return list;
  }
  else{
    return new LinkedList(splitList(list.slice(0, Math.ceil(list.length/2))), splitList(list.slice(Math.ceil(list.length/2))));
  }
};

function mergeSort(list){
 // if list is a list of numbers, split
 //
 console.log('hey!!!!!!!!', list)
 if(typeof(list.head.data === 'number')){
   let splittedList = splitList(list);
   return mergeSort(splittedList.head.data).concat(mergeSort(splittedList.tail.data));
 }
 else{
   return sortTwo(list.head.data, list.tail.data);
 }
}

module.exports = mergeSort;
const Queue = require('./queue');

class HashTable {
  constructor(size = 53){
    this.keyMap = new Array(size);
  }

  _hash(key){
    let total = 0;
    let PRIME_NUMBER = 79;

    if(typeof(key) === 'number'){
      key = key.toString();
    }
    for(let i=0; i < Math.min(key.length, 100); i++){
      let nextTerm = key.charCodeAt(i);
      total = ((total * PRIME_NUMBER) + nextTerm) % this.keyMap.length;
    }
    return total;
  }

  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [[key, value]];
    }
    else{
      let keyWasFound = false;
      for(let pair of this.keyMap[index]){
        if(pair[0] === key){
          keyWasFound = true;
          pair[1] = value;
        }
      }
      if(!keyWasFound){
        this.keyMap[index].push([key, value]);
      }
    }
    return this.keyMap;
  }

  get(key){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      return undefined;
    }
    for(let pair of this.keyMap[index]){
      if(pair[0] === key){
        return pair[1];
      }
    }
  }

  remove(key){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      return undefined;
    }
    for(let i=0; i < this.keyMap[index].length; i++){
      let pair = this.keyMap[index][i];
      if(pair[0] === key){
        this.keyMap[index].splice(i, 1);
      }
    }
  }

  keys(){
    let keyList = new Queue();
    let trimmedKeymap = this.keyMap.filter((slot) => slot);
    for(let index of trimmedKeymap){
      for(let pair of index){
        keyList.enqueue(pair[0]);
      }
    }
    return keyList;
  }

  print(){
    let trimmedKeymap = this.keyMap.filter((slot) => slot);
    for(let index of trimmedKeymap){
      for(let pair of index){
        console.log(pair[0] + ':', pair[1]);
      }
    }
  }
}

module.exports = HashTable;
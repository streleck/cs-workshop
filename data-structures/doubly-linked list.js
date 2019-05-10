class Node {
  constructor(data){
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList {
  constructor(datas){
    this.head = null;
    this.tail = null;
    this.length = 0;
    for(let i=0; i<arguments.length; i++){
      this.push(arguments[i]);
    }
  }

  push(data){
    let newNode = new Node(data);
    newNode.prev = this.tail;
    if(this.tail){
      this.tail.next = newNode;
    }
    else{
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop(){
    if(!this.tail){
      return undefined;
    }
    let data = this.tail.data;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }
    else{
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return data;
  }

  shift(){
    if(!this.head){
      return undefined;
    }
    let data = this.head.data;
    if(this.length === 1){
      this.tail = null;
      this.head = null;
    }
    else{
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return data;
  }

  unshift(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    if(this.head){
      this.head.prev = newNode;
    }
    else{
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  _getNode(index){
    if(index >= this.length || index < (this.length * -1)){
      return undefined;
    }
    if(index < 0){
      index = this.length + index;
    }
    if(index < this.length / 2){
      let node = this.head;
      for(let i=0; i<index; i++){
        node = node.next;
      }
      return node;
    }
    else{
      let node = this.tail;
      for(let i=this.length-1; i>index; i--){
        node = node.prev;
      }
      return node;
    }
  }

  get(index){
    let node = this._getNode(index);
    return node ? node.data : undefined;
  }

  set(index, data){
    let node = this._getNode(index);
    if(node){
      node.data = data;
      return this;
    }
    else{
      return undefined;
    }
  }

  insert(index, value){
    if(index === 0){
      return this.unshift(value);
    }
    else if(index === this.length){
      return this.push(value);
    }
    else{
      let afterNode = this._getNode(index);
      if(!afterNode){
        return undefined;
      }
      let beforeNode = afterNode.prev;
      let newNode = new Node(value);
      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      afterNode.prev = newNode;
      newNode.next = afterNode;
      this.length++;
      return this;
    }
  }

  remove(index){
    if(index === 0){
      return this.shift();
    }
    else if(index === this.length-1){
      return this.pop();
    }
    else{
      let node = this._getNode(index);
      if(!node){
        return undefined;
      }
      let beforeNode = node.prev;
      let afterNode = node.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      this.length--;
      return node.data;
    }
  }

  forEach(callback){
    let node = this.head;
    while(node){
      callback(node.data);
      node = node.next;
    }
    return this;
  }

  reduce(callback){
    let node = this.head;
    while(node){
      accumulator = callback(accumulator, node.data);
      node = node.next;
    }
    return accumulator;
  }

  map(callback){
    let mutatedList = new LinkedList();
    let node = this.head;
    while(node){
      mutatedList.push(callback(node.data));
      node = node.next;
    }
    return mutatedList;
  }

  filter(callback){
    let filteredList = new LinkedList();
    let node = this.head;
    while(node){
      if(callback(node.data)){
        filteredList.push(node.data);
      }
      node = node.next;
    }
    return filteredList;
  }

  concat(list){
    list.forEach((node) => {
      this.push(node);
    });
    return this;
  }

  print(){
    if(this.length === 0){
      console.log('[]');
    }
    let printString = '[';
    this.forEach((node) => {
      if(typeof(node) === 'string'){
        node = '"' + node + '"';
      }
      printString += node + ', ';
    })
    printString = printString.substring(0, printString.length -2);
    printString += ']';
    console.log(printString);
  }
}

module.exports = DoublyLinkedList;
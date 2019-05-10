class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(datas){
    this.head = null;
    this.tail = null;
    this.length = 0;
    for(let i=0; i<arguments.length; i++){
      this.push(arguments[i]);
    }
  }

  push(data){
    let node = new Node(data);
    if(this.tail){
      this.tail.next = node;
    }
    else{
      this.head = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop(){
    if(this.length === 0){
      return undefined;
    }
    else if(this.length === 1){
      let data = this.head.data
      this.head = null;
      this.length--;
      return data;
    }
    else{
      let current = this.head;
      while(current.next){
        console.log('higs: ', current)
        if(current.next === this.tail){
          let data = current.next.data;
          current.next = null;
          this.tail = current;
          this.length--;
          return data;
        }
        current = current.next
      }
    }
  }

  shift(){
    if(!this.head){
      return undefined;
    }
    else{
      let data = this.head.data;
      this.head = this.head.next;
      this.length--;
      if(this.length === 0){
        this.tail = null;
      }
      return data;
    }
  }

  unshift(data){
    let node = new Node(data);
    node.next = this.head;
    this.head = node
    if(!this.tail){
      this.tail = node;
    }
    this.length++;
    return this;
  }

  get(index){
    if(index >= this.length || index < (this.length * -1)){
      return undefined;
    }
    if(index < 0){
      index = this.length + index;
    }
    else{
      let node = this.head;
      for(let i=0; i < index; i++){
        node = node.next;
      }
      return node.data;
    }
  }

  set(index, data){
    if(index < 0 || index > this.length - 1){
      return undefined;
    }
    else{
      let node = this.head;
      for(let i=0; i < index; i++){
        node = node.next;
      }
      node.data = data;
      return this;
    }
  }

  insert(index, data){
    if(index === 0){
      this.shift(node);
    }
    else{
      let node = new Node(data);
      let beforeNode = this.head;
      let afterNode = this.head.next;
      for(let i=1; i<index; i++){
        beforeNode = beforeNode.next;
        afterNode = afterNode.next;
      }
      beforeNode.next = node;
      node.next = afterNode;
      this.length++;
      return this;
    }
  }

  remove(index){
    if(index < 0 || index > this.length - 1){
      return undefined;
    }
    if(index === 0){
      this.shift();
    }
    if(index === this.length - 1){
      this.pop();
    }
    else{
      let beforeNode = this.head;
      afterNode = this.head.next.next;
      for(let i=0; i < index-1; i++){
        beforeNode = beforeNode.next;
        afterNode = afterNode.next;
      }
      let data = beforeNode.next.data;
      beforeNode.next = afterNode;
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
    let accumulator = 0;
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
module.exports = LinkedList;

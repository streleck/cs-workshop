class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(datas){
    this.first = null;
    this.last = null;
    this.size = 0;
    for(let i=0; i<arguments.length; i++){
      this.push(arguments[i]);
    }
  }

  push(data){
    let newNode = new Node(data);
    if(!this.last){
      this.last = newNode;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.size++;
    return this.size;
  }

  pop(){
    if(this.size === 0){
      return undefined;
    }
    else{
      let node = this.first;
      this.first = node.next;
      this.size--;
      if(this.size === 0){
        this.last = null;
      }
      return node.data;
    }
  }

  forEach(callback){
    let node = this.first;
    while(node){
      callback(node);
      node = node.next;
    }
  }

  print(){
    if(this.size === 0){
      console.log('This stack is empty');
    }
    else{
      console.log('size:', this.size);
      let node = this.first;
      for(let i=0; i<this.size; i++){
        console.log(i + ':', node.data);
        node = node.next;
      }
    }
  }
}

module.exports = Stack;
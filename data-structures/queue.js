class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(data){
    let newNode = new Node(data);
    if(!this.first){
      this.first = newNode;
    }
    if(this.last){
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
    return this.size;
  }

  dequeue(){
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

  print(){
    if(this.size === 0){
      console.log('This stack is empty');
    }
    else{
      console.log('size:', this.size);
      let node = this.first;
      for(let i=0; i<this.size; i++){
        console.log(i + ':', node);
        node = node.next;
      }
    }
  }
}

module.exports = Queue;
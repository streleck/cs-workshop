class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(datas){
    this.first = null;
    this.last = null;
    this.size = 0;
    for(let i=0; i<arguments.length; i++){
      this.enqueue(arguments[i])
    }
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

  forEach(callback){
    let node = this.first;
    while(node){
      callback(node);
      node = node.next;
    }
  }

  copy(){
    let newCopy = new Queue();
    this.forEach((node) =>{
      newCopy.enqueue(node.data);
    });
    return newCopy;
  }

  concat(secondQueue){
    secondQueue.forEach((node) =>{
      this.enqueue(node.data);
    })
  }

  print(){
    if(this.size === 0){
      console.log('This stack is empty');
    }
    else{
      let printLine = '[';
      this.forEach((node)=> {
        printLine += node.data
        if(node.next){
          printLine += '|';
        }
        else{
          printLine += ']';
        }
      });
      console.log(printLine);
    }
  }
}

module.exports = Queue;
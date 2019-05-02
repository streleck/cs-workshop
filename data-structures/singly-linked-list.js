class Node {
  constructor(data){
    this.data = data;
    this.next = undefined;
  }
}


class SinglyLinkedList {
  constructor(datas){
    this.head = undefined;
    this.tail = undefined;
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
    let nextNode = this.head;
    while(nextNode.next){
      if(nextNode.next = this.tail){
        nextNode.next = undefined;
      }
    }
    return this.tail;
  }

  shift(data){
    let node = new Node(data);
    node.next = this.head;
    this.head = node
    if(!this.tail){
      this.tail = node;
    }
    this.length++;
    return this;
  }

  insert(node, after){
    if(after === 0){
      this.shift(node);
    }
    else{
      let beforeNode = this.head;
      let afterNode = this.head.next;
      for(let i=1; i<after; i++){
        beforeNode = beforeNode.next;
        afterNode = afterNode.next;
      }
      beforeNode.next = node;
      node.next = afterNode;
      this.length++;
      return this;
    }
  }
}



let myList = new SinglyLinkedList('doogie', 'howser', 'md');



// myList.push('howser');

// myList.shift('doctor');

console.log(myList);
class Node {
  constructor(data, priority){
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class PriorityQueue {
  constructor(){
    this.first = null;
    this.size = 0;
  }

  _placeAtEnd(node){
    if(this.size === 0){
      this.first = node;
      node.parent = null;
      return node;
    }
    let currentNode = this.first;
    let binaryRepOfSlot = (this.size + 1).toString(2);
    for(let i=1; i<binaryRepOfSlot.length -1; i++){
      if(binaryRepOfSlot.charAt(i) === '0'){
        currentNode = currentNode.left;
      }
      else{
        currentNode = currentNode.right;
      }
    }
    if(binaryRepOfSlot.charAt(binaryRepOfSlot.length -1) === '0'){
      currentNode.left = node;
    }
    else{
      currentNode.right = node;
    }
    node.parent = currentNode;
    return node;
  }

  _swap(child, parent){
    let tempLeft = child.left;
    let tempRight = child.right;
    if(parent.parent){
      if(parent.parent.left === parent){
        parent.parent.left = child;
      }
      else{
        parent.parent.right = child;
      }
    }
    else{
      this.first = child;
    }
    if(child.left){
      child.left.parent = parent;
    }
    if(child.right){
      child.right.parent = parent;
    }
    if(parent.left === child){
      child.left = parent;
      child.right = parent.right;
      if(parent.right) parent.right.parent = child;
    }
    else if(parent.right === child){
      child.right = parent;
      child.left = parent.left;
      parent.left.parent = child;
    }
    else{
      throw new Error('Can only swap nodes that have a parent/child relationship. Those do not.');
    }
    child.parent = parent.parent;
    parent.left = tempLeft;
    parent.right = tempRight;
    parent.parent = child;
  };

  _getAtIndex(index){
    // We're going to use an index of 1 to represent the root or 'first' element
    if(index > this.size || index < 1){
      return undefined;
    }
    if(index === 1){
      return this.first;
    }
    var currentNode = this.first;
    let binaryRepOfIndex = index.toString(2);
    for(let i=1; i<binaryRepOfIndex.length; i++){
      if(binaryRepOfIndex.charAt(i) === '0'){
        currentNode = currentNode.left;
      }
      else{
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  _bubbleUp(node){
    while(node.parent){
      if(node.priority < node.parent.priority){
        this._swap(node, node.parent);
        if(node.parent === null){
          this.first = node;
        }
      }
      else{
        break;
      }
    }
  }

  _simmaDown(){
    let node = this.first;
    if(!node) return;
    while(node.left){
      let smallerChild = node.left;
      if(node.right && node.right.priority < node.left.priority){
        smallerChild = node.right;
      }
      if(node.priority > smallerChild.priority){
        this._swap(smallerChild, node);
      }
      else{
        break;
      }
    }
  }

  enqueue(data, priority){
    let newNode = new Node(data, priority);
    newNode = this._placeAtEnd(newNode);
    this._bubbleUp(newNode);
    this.size++;
    return this;
  }

  dequeue(){
    if(!this.first){
      return undefined;
    }
    //Grab the thing at the top
    let node = this.first;
    if(this.size === 1){
      this.first = null;
    }
    else if(this.size <= 3){
      if(node.right){
        this.first = node.right;
        this.first.parent = null;
        this.first.left = node.left; 
        this.first.right = null;
        node.left.parent = this.first;
      }
      else{
        this.first = node.left;
        this.first.parent = null;
        this.first.left = null; 
        this.first.right = null;
      }
    }
    else{
      // Move the last item to the top
      let lastItem = this._getAtIndex(this.size);
      lastItem.left = node.left;
      lastItem.right = node.right;
      node.left.parent = lastItem;
      if(node.right) node.right.parent = lastItem;
      if(lastItem.parent.right){
        lastItem.parent.right = null;
      }
      else{
        lastItem.parent.left = null;
      }
      lastItem.parent = null;
      this.first = lastItem;
    }
    //bubble down
    this._simmaDown();
    //finish detaching old 'first'
    node.right = null;
    node.left = null;
    this.size -= 1;
    return node.data;
  }

  print(){
    // since the root has index of 1, we start there
    if(this.size < 1) console.log('nothing to see here!');
    for(let i=1; i<=this.size; i++){
      let node = this._getAtIndex(i);
      console.log(i + ')');
      console.log('data: ' + node.data);
      console.log('priority: ' + node.priority);
      console.log('parent: ' + (node.parent ? node.parent.data : 'none'));
      console.log('left: ' + (node.left ? node.left.data : 'none'));
      console.log('right: ' + (node.right ? node.right.data : 'none'));
    }
  }

}

let pq = new PriorityQueue();

pq.enqueue('first', 1);
pq.enqueue('second', 2);
pq.enqueue('third', 3);
pq.enqueue('first2', 1);
pq.enqueue('zeroth', 0);

pq.dequeue();
pq.dequeue();
pq.dequeue();

module.exports = PriorityQueue;
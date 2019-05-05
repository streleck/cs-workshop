let Queue = require('./queue')

class Node {
  constructor(data){
    this.data = data;
    this.children = new Queue();
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  insert(data, parentNode){
    let newNode = new Node(data);
    if(!this.root){
      this.root = new Node(data);
      return this;
    }
    parentNode.children.enqueue(newNode);
    return this;
  }

  breadthFind(value){

    let toVisit = new Queue();
    toVisit.enqueue(this.root);
    while(toVisit.size > 0){
      let node = toVisit.dequeue();
      if(node.data === value){
        return node;
      }
      let replacementChildren = new Queue();
      let child = node.children.dequeue();
      while(child){
        toVisit.enqueue(child);
        replacementChildren.enqueue(child);
        child = node.children.dequeue();
      }
      node.children = replacementChildren;
    }
    return false;
  }

  print(root){
    if(!root){
      let root = this.root;
    }
    let queue = new Queue(root);
    let separator = '|';
    let depth = 0;

    while(queue.size > 0){
      let thisRow = depth + ') ';
      let nextNode = queue.dequeue();
    }
  }

}

module.exports = Tree;
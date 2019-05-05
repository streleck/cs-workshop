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
      root = this.root;
    }
    let thisGeneration = new Queue(root);
    let nextGeneration = new Queue();
    let degree = 0;
    let thisRow = degree + ')';
    while(thisGeneration.size > 0){
      let nextNode = thisGeneration.dequeue();
      thisRow += ' ' + nextNode.data + ',';
      let children = nextNode.children.copy();
      children.forEach((child) => {
        nextGeneration.enqueue(child.data);
      })
      if(thisGeneration.size === 0){
        thisRow = thisRow.substr(0, thisRow.length-1); // to remove trailing comma
        console.log(thisRow);
        thisGeneration = nextGeneration;
        nextGeneration = new Queue();
        degree++;
        thisRow = degree + ')';
      } 
    }

  }

}

module.exports = Tree;
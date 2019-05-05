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

  breadthFirstSearch(value){

    let toVisit = new Queue();
    return checkNode(this.root);

    function checkNode(node){
      if(node.value === value){
        return node;
      }
      let replacementChildren = new Queue();
      let child = node.children.dequeue();
      while(child){
        toVisit.enqueue(child);
        replacementChildren.enqueue(child);
        child = node.children.dequeue();
      }
      children = replacementChildren;
      let nextNode = toVisit.dequeue();
      if(!nextNode){
        return false;
      }
      else{
        return checkNode(nextNode);
      }
    }    
  }



}

module.exports = Tree;
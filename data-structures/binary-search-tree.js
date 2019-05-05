const Queue = require('./queue');

class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(data){
    let newNode = new Node(data);
    if(!this.root){
      this.root = newNode;
      return this;
    }
    else{
      let node = this.root;
      while(true){
        if(newNode.data < node.data){
          if(!node.left){
            node.left = newNode;
            return this;
          }
          else{
            node = node.left;
          }
        }
        else if(newNode.data > node.data){
          if(!node.right){
            node.right = newNode;
            return this;
          }
          else{
            node = node.right;
          }
        }
        else{ //value already exists in tree
          return undefined;
        }
      }
    }
  }

  contains(value){
    if(!this.root){
      return false;
    }
    let node = this.root;
    while(true){
      if(value === node.data){
        return true;
      }
      else if(value < node.data){
        if(!node.left){
          return false;
        }
        else{
          node = node.left;
        }
      }
      else{
        if(!node.right){
          return false;
        }
        else{
          node = node.right;
        }
      }
    }
  }

  getAllData(root){
    if(!root){
      root = this.root
    }
    let allData = new Queue();    
    if(root.left){
      allData.concat(this.getAllData(root.left));
    }
    allData.enqueue(root.data);
    if(root.right){
      allData.concat(this.getAllData(root.right));
    }
    return allData;
  }

}

module.exports = BinarySearchTree;
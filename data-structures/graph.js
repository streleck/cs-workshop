const HashTable = require('./hash-table');
const Stack = require('./stack');
const Queue = require('./queue');

class Graph {
  constructor(){
    this.adjacencyList = new HashTable();
  }

  addVertex(vertex){
    if(!this.adjacencyList.get(vertex)){
      this.adjacencyList.set(vertex, []);
    }
    return this.adjacencyList;
  }

  removeVertex(vertexToRemove){
    let neighbors = this.adjacencyList.get(vertexToRemove);
    if(!neighbors){
      return;
    }
    for(let vertex of neighbors){
      let vertexAdjList = this.adjacencyList.get(vertex);
      vertexAdjList = vertexAdjList.filter((edge) => {
        if(edge !== vertexToRemove){
          return edge;
        }
      })
      this.adjacencyList.set(vertex, vertexAdjList);
    }
    this.adjacencyList.remove(vertexToRemove);
    return this.adjacencyList;
  }

  _addAdjacency(vertex, adjacency){
    let adjacencies = this.adjacencyList.get(vertex);
    adjacencies.push(adjacency);
    this.adjacencyList.set(vertex, adjacencies);
  }

  addEdge(vertex1, vertex2){
    if(!this.adjacencyList.get(vertex1)){
      this.addVertex(vertex1);
    }
    if(!this.adjacencyList.get(vertex2)){
      this.addVertex(vertex2);
    }
    this._addAdjacency(vertex1, vertex2);
    this._addAdjacency(vertex2, vertex1);
    return this.adjacencyList;
  }

  removeEdge(vertex1, vertex2){
    if(!this.adjacencyList.get(vertex1) || !this.adjacencyList.get(vertex2)){
      return;
    }
    let indexOfTargetEdge = this.adjacencyList.get(vertex1).indexOf(vertex2);
    if(indexOfTargetEdge != -1){
      let adjacencies = this.adjacencyList.get(vertex1);
      adjacencies.splice(indexOfTargetEdge, 1);
      this.adjacencyList.set(vertex1, adjacencies);
    }
    indexOfTargetEdge = this.adjacencyList.get(vertex2).indexOf(vertex1);
    if(indexOfTargetEdge != -1){
      let adjacencies = this.adjacencyList.get(vertex2);
      adjacencies.splice(indexOfTargetEdge, 1);
      this.adjacencyList.set(vertex2, adjacencies);
    }
    return this.adjacencyList;
  }

  // Recursive Depth First Search
  depthFirstRecursive(vertex){
    let result = new Queue();
    let visitedVertices = new HashTable();
    const adjacencyList = this.adjacencyList;
    
    diveDeeperIntoSearch(vertex);
    function diveDeeperIntoSearch(vertex){
      if(!visitedVertices.get(vertex)){
        result.enqueue(vertex);
        visitedVertices.set(vertex, true);
        for(let neighbor of adjacencyList.get(vertex)){
          if(!visitedVertices.get(neighbor)){
            diveDeeperIntoSearch(neighbor);
          }
        }
      }
    }
    return result;
  }

  // Iterative Depth First Search
  depthFirstIterative(vertex){
    let result = new Queue();
    let visitedVertices = new HashTable();
    let toVisit = new Stack();

    toVisit.push(vertex);

    while(toVisit.size > 0){
      let next = toVisit.pop();
  
      if(!visitedVertices.get(next)){
        result.enqueue(next);
        visitedVertices.set(next, true);
        for(let neighbor of this.adjacencyList.get(next)){
          toVisit.push(neighbor);
        }
      }
    }
    return result;
  }

  // Iterative Depth First Search
  breaththFirstSearch(vertex){
    let result = new Queue();
    let visitedVertices = new HashTable();
    let toVisit = new Queue();

    toVisit.enqueue(vertex);

    while(toVisit.size > 0){
      let next = toVisit.dequeue();
  
      if(!visitedVertices.get(next)){
        result.enqueue(next);
        visitedVertices.set(next, true);
        for(let neighbor of this.adjacencyList.get(next)){
          toVisit.enqueue(neighbor);
        }
      }
    }
    return result;
  }

  print(){
    this.adjacencyList.print();
  }
}


module.exports = Graph;
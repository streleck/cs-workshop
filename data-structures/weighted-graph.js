const HashTable = require('./hash-table');
const Stack = require('./stack');
const Queue = require('./queue');
const PriorityQueue = require('./priority-queue');

class WeightedGraph {
  constructor(){
    this.adjacencyList = new HashTable();
  }

  addVertex(vertex){
    if(!this.adjacencyList.get(vertex)){
      this.adjacencyList.set(vertex, new HashTable());
    }
    return this.adjacencyList;
  }

  removeVertex(vertexToRemove){
    let neighbors = this.adjacencyList.get(vertexToRemove).keys();
    if(!neighbors){
      return;
    }
    neighbors.forEach(neighbor => {
      let vertexAdjTable = this.adjacencyList.get(neighbor);
      vertexAdjTable.remove(vertexToRemove);
      this.adjacencyList.set(neighbor, vertexAdjTable);
    }); 
    this.adjacencyList.remove(vertexToRemove);
    return this.adjacencyList;
  }

  _addAdjacency(vertex, adjacency, weight){
    let adjacencies = this.adjacencyList.get(vertex);
    adjacencies.set(adjacency, weight);
    this.adjacencyList.set(vertex, adjacencies);
  }

  addEdge(vertex1, vertex2, weight){
    if(!this.adjacencyList.get(vertex1)){
      this.addVertex(vertex1);
    }
    if(!this.adjacencyList.get(vertex2)){
      this.addVertex(vertex2);
    }
    this._addAdjacency(vertex1, vertex2, weight);
    this._addAdjacency(vertex2, vertex1, weight);
    return this.adjacencyList;
  }

  getConnectedVertices(vertex){
    let result = new Queue();
    let visitedVertices = new HashTable();
    let toVisit = new Queue();

    toVisit.enqueue(vertex);

    while(toVisit.size > 0){
      let next = toVisit.dequeue();
  
      if(!visitedVertices.get(next)){
        result.enqueue(next);
        visitedVertices.set(next, true);
        let neighbors = this.adjacencyList.get(next).keys();
        neighbors.forEach((neighbor) => {
          toVisit.enqueue(neighbor);
        });
      }
    }
    return result;
  }

  // dijkstrasAlgo(start, end){
  //   let previousStopTable = new HashTable();
  //   let verticesToEvaluate = new PriorityQueue();
  //   let alreadyVisited = new HashTable();
  //   let shortestKnownLengths = new HashTable();

  // }

  print(){
    let vertices = this.adjacencyList.keys();
    vertices.forEach(vertex => {
      console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
      console.log(vertex + ':');
      this.adjacencyList.get(vertex).print();
    })
  }
}

module.exports = WeightedGraph;
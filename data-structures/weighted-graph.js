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

  dijkstrasAlgorithm(start, end){
    let previousStopTable = new HashTable();
    let toEvaluate = new PriorityQueue();
    let alreadyVisited = new HashTable();
    let shortestKnownLengths = new HashTable();

    toEvaluate.enqueue(start, 0);
    shortestKnownLengths.set(start, 0);
 
    while(toEvaluate.size > 0){
      // get next thing out of priority queue
      let vertex = toEvaluate.dequeue();
      // if visited, throw away 
      if(alreadyVisited.get(vertex)){
        continue;
      }
      // get the neighbors from the adjacency list
      let neighbors = this.adjacencyList.get(vertex).keys();
      // for each neighbor, calculate distances (currentVertex distance + weight)
      neighbors.forEach((neighbor) => {
        let distanceByThisPath = shortestKnownLengths.get(vertex) + this.adjacencyList.get(vertex).get(neighbor);
        // if distance is lower than lowestdistance of that vertex, update table
        // if new distance to that neighbor is lower, update previous stop table
        if(distanceByThisPath < (shortestKnownLengths.get(neighbor) || Infinity) && neighbor !== start){
          shortestKnownLengths.set(neighbor, distanceByThisPath);
          previousStopTable.set(neighbor, vertex);
          toEvaluate.enqueue(neighbor, distanceByThisPath);
        }
      })
      alreadyVisited.set(vertex, true);
    }
    //if ending vertex was not found, return undefined

    //make final path (a queue);
    //make stack to store reversed path;

    //using previous stop table
    //shortestKnownLengths.print();
    if(!end){
      return previousStopTable;
    }
    else{
      let path = new Queue();
      let backwardsPath = new Stack();
      let step = end;
      backwardsPath.push(step);
      while(step !== start){
        step = previousStopTable.get(step);
        if(!step){
          return undefined;
        }
        backwardsPath.push(step);
      }
      let stops = backwardsPath.size;
      for(let i=0; i<stops; i++){
        path.enqueue(backwardsPath.pop());
      }
      return path;
    }
  }

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
const SinglyLinkedList = require('./data-structures/singly-linked-list');
const DoublyLinkedList = require('./data-structures/doubly-linked list');
const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');
const BinarySearchTree = require('./data-structures/binary-search-tree');
const Tree = require('./data-structures/tree');
const PriorityQueue = require('./data-structures/priority-queue');
const HashTable = require('./data-structures/hash-table');
const Graph = require('./data-structures/graph');
const WeightedGraph = require('./data-structures/weighted-graph');


// let graph = new WeightedGraph();

// graph.addEdge('Jason', 'Emily', 3);
// graph.addEdge('Jason', 'Vianca', 5);
// graph.addEdge('Mike', 'Vianca', 8);
// graph.addEdge('Emily', 'Mike', 8);
// graph.addEdge('Devin', 'Sebastian', 3);
// graph.addEdge('Sebastian', 'Ben', 9);
// graph.addEdge('Prem', 'Ben', 4);
// graph.addEdge('Jared', 'Kate', 3);

// graph.getConnectedVertices('Emily').print();

let pq = new PriorityQueue();

pq.enqueue('fif', 5);
pq.enqueue('first', 1);
pq.enqueue('second', 2);
pq.enqueue('sixt', 6);
pq.enqueue('third', 3);
pq.enqueue('fourt', 4);
pq.enqueue('sevent', 7);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());

//console.log(pq);
//pq.print();

const SinglyLinkedList = require('./data-structures/singly-linked-list');
const DoublyLinkedList = require('./data-structures/doubly-linked list');
const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');
const BinarySearchTree = require('./data-structures/binary-search-tree');
const Tree = require('./data-structures/tree');
const HashTable = require('./data-structures/hash-table');
const Graph = require('./data-structures/graph');


let graph = new Graph();



graph.addEdge('Micah', 'Sebastian');
graph.addEdge('Ben', 'Sebastian');
graph.addEdge('Ben', 'Prem');
graph.addEdge('Prem', 'Brent');
graph.addEdge('Brent', 'Ben');
graph.addEdge('Matt Moon', 'Andy');
graph.addEdge('Andy', 'Emily');
graph.addEdge('Rebecca', 'Emily');
graph.addEdge('Emily', 'Mike');
graph.addEdge('Matt Moon', 'Kerim');
graph.addEdge('Matt Moon', 'Justin Moon');
graph.addEdge('Kerim', 'Mike Bittinger');

graph.breaththFirstSearch('Emily').print();

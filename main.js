const LinkedList = require('./data-structures/linked-list');
const DoublyLinkedList = require('./data-structures/doubly-linked list');
const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');
const BinarySearchTree = require('./data-structures/binary-search-tree');
const Tree = require('./data-structures/tree');
const PriorityQueue = require('./data-structures/priority-queue');
const HashTable = require('./data-structures/hash-table');
const Graph = require('./data-structures/graph');
const WeightedGraph = require('./data-structures/weighted-graph');

const radixSort = require('./sorting-algorithms/radix-sort');
const mergeSort = require('./sorting-algorithms/merge-sort');


// let graph = new WeightedGraph();

// graph.addEdge('A', 'B', 5);
// graph.addEdge('B', 'D', 6);
// graph.addEdge('D', 'F', 1);
// graph.addEdge('D', 'E', 2);
// graph.addEdge('F', 'E', 4);
// graph.addEdge('C', 'E', 5);
// graph.addEdge('A', 'C', 2);
// graph.addEdge('A', 'F', 100);

// graph.dijkstrasAlgorithm('A').print();


let list = new LinkedList(2, 3, 1, 234, 105, 54, 3265, 4444, 33, 73, 2);

//list1.concat(list2).print();

mergeSort(list).print();
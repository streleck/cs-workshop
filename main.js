const SinglyLinkedList = require('./data-structures/singly-linked-list');
const DoublyLinkedList = require('./data-structures/doubly-linked list');
const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');
const BinarySearchTree = require('./data-structures/binary-search-tree');
const Tree = require('./data-structures/tree');



let bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(1);
bst.insert(5);
bst.insert(12);
bst.insert(9);
bst.insert(16);

bst.getAllData().print();







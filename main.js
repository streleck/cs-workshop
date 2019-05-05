const SinglyLinkedList = require('./data-structures/singly-linked-list');
const DoublyLinkedList = require('./data-structures/doubly-linked list');
const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');
const BinarySearchTree = require('./data-structures/binary-search-tree');
const Tree = require('./data-structures/tree');



let tree = new Tree();

tree.insert('jokic');

tree.insert('murray', tree.root);


tree.insert('harris', tree.root);

tree.insert('barton', tree.breadthFind('murray'));

tree.insert('craig', tree.breadthFind('murray'));

tree.insert('millsap', tree.breadthFind('harris'));

tree.insert('plumlee', tree.breadthFind('harris'));




console.log(tree.breadthFind('harris').children);







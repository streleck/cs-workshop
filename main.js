const SinglyLinkedList = require('./data-structures/singly-linked-list');
const DoublyLinkedList = require('./data-structures/doubly-linked list');
const Stack = require('./data-structures/stack');
const Queue = require('./data-structures/queue');


let queue = new Queue();

queue.enqueue('ahh');
queue.enqueue('this');
queue.enqueue('expereiences');
queue.enqueue('reverse');


console.log(queue.size)
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size)







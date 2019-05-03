const sll = require('./data-structures/singly-linked-list');
const dll = require('./data-structures/doubly-linked list');




let listThing = new dll.DoublyLinkedList('uno', 'dos', 'tres', 'quatro', 'cinco', 'seis');


listThing.unshift('zero');
listThing.push('siete');
listThing.remove(-2);
listThing.print();

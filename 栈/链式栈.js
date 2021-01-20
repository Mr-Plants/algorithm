const {DoublyLinkedList} = require("../链表/双向链表");

class ChainStack {
  constructor() {
    this.linkedList = new DoublyLinkedList();
  }


  push(val) {
    return this.linkedList.append(val);
  }

  pop() {
    return this.linkedList.removeByPointer(this.linkedList.tail);
  }

  print() {
    this.linkedList.print();
  }
}


// test

let stack = new ChainStack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.print();
stack.pop();
stack.print();

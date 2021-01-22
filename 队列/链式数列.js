//

const {DoublyLinkedList} = require("../链表/双向链表");

class NodeList {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class ChainQueue {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  enqueue(val) {
    // 入队时修改tail指针
    return this.items.append(val)
  }


  dequeue() {
    return this.items.removeByPointer(this.items.head)
  }

  print() {
    this.items.print();
  }
}


// test
let queue = new ChainQueue();
for (let i = 0; i < 100; i++) {
  // console.log(queue.head, queue.tail)

  if (Math.random() < 0.5) {
    const val = 'ran' + parseInt(Math.random() * 100);
    queue.enqueue(val)
    console.log('入栈：', val)
  } else {
    const out = queue.dequeue();
    console.log('出栈：', out)
  }
  queue.print();
}






























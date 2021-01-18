const {DoublyLinkedList} = require("./双向链表");


let linkedList = new DoublyLinkedList();

function removeNthFromEnd(n) {
  if (n > linkedList.length || n <= 0) return;
  let index = linkedList.length - n;
  let i = 0;
  let cur = linkedList.head;
  while (cur && i < index) {
    cur = cur.next;
    i++;
  }
  // linkedList.removeByPointer(cur);
  // 假设没有上面的快捷方法
  let {prev, next} = cur;
  cur.next = cur.prev = null;
  if (prev) {
    prev.next = next;
  } else {
    linkedList.head = next;
  }
  if (next) {
    next.prev = prev;
  } else {
    linkedList.tail = prev;
  }
  linkedList.length--;
}


// test
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.print();

removeNthFromEnd(5);
linkedList.print();
removeNthFromEnd(2);
linkedList.print();
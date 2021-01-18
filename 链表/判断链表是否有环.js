const {SinglyLinkedList} = require("./单链表");
const {CircularLinkedList} = require("./循环链表");

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}


function hasCycle2(head) {
  let set = new Set();
  let cur = head;
  while (cur) {
    if (set.has(cur)) {
      return true;
    }
    set.add(cur);
    cur = cur.next;
  }
  return false;
}


const circular = new CircularLinkedList();
// circular.append(1)
// circular.append(2)
// circular.append(3)
// circular.append(4)
// circular.append(5)
circular.print();
const singly = new SinglyLinkedList();
singly.append(1)
singly.append(2)
singly.append(3)

console.log(hasCycle(singly.head))
console.log(hasCycle(circular.head))
console.log(hasCycle2(circular.head))
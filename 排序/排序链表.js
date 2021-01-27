/*思路
* 循环*/
const {DoublyLinkedList} = require("../链表/双向链表");

function bubbleSort(head) {
  if (!head.next) return head;
  let cur = head;
  while (cur) {
    if (cur.next && cur.val > cur.next.val) {
      let temp = cur.next;
      cur.next = temp.next;
      temp.prev = cur.prev;
      temp.next = cur;
      if (cur.prev) {
        cur.prev.next = temp;
        cur.prev = temp;
      }
      if (cur === head) {
        head = temp;
      }

    } else {
      cur = cur.next;
    }


  }

  return head;
}


let list = new DoublyLinkedList();
list.append(3)
list.append(1)
list.append(5)
list.append(9)
list.append(2)
list.append(6)
list.print();

bubbleSort(list.head)
list.print();

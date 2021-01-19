/*
思路：

 */
const {DoublyLinkedList} = require("./双向链表");
const {SinglyLinkedList} = require("./单链表");

function isPalindrome(head) {
  let cur = head;
  while (cur.next) {
    cur = cur.next;
  }
  let t = cur;
  cur = head;
  while (t) {
    if (t.val !== cur.val) {
      return false;
    }
    t = t.prev;
    cur = cur.next;
  }
  return true;
}

// test
let l1 = new DoublyLinkedList()
l1.append('h')
l1.append('o')

console.log(isPalindrome(l1.head))


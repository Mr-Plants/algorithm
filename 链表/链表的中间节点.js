/*
给定一个头结点为 head 的非空单链表，返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。
 */

/*
思路：
1、快慢指针 O(n),O(1)
2、根据链表length取中间节点  O(n),O(1)
3、转化为数组，利用数组随机访问[n/2]   O(n),O(n)
 */
const {SinglyLinkedList} = require("./单链表");

function middleNode(head) {
  let fast = head;
  let slow = head;
  // 如果是奇数节点，fast存在，但是fast.next不存在。偶数节点fast不存在
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}


function middleNode2(head) {
  let arr = [];
  let cur = head
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }
  return arr[Math.trunc(arr.length / 2)];
}


function middleNode3(head) {
  let length = 0;
  let cur = head;
  while (cur) {
    length++;
    cur = cur.next;
  }
  let i = 0;
  let node = head;
  const len = Math.trunc(length / 2);
  while (i < len) {
    node = node.next;
    i++
  }
  return node;

}


// test
let ll = new SinglyLinkedList()

ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)


console.log(middleNode(ll.head))
console.log(middleNode2(ll.head))
console.log(middleNode3(ll.head))





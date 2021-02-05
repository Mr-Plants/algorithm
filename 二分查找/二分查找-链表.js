//
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


/*遍历次数为n/2+n/4+...+1，求和为*/
function binarySearch(head, value) {
  let mid = getMiddleNode(head);

  if (mid.val > value) {
    mid = getMiddleNode(mid);
  }
}


function getMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

const {SinglyLinkedList} = require("./单链表");

function mergeTwoList(list1, list2) {
  let cur1 = list1.head, cur2 = list2.head;
  let sortedList = new SinglyLinkedList();

  while (cur1 || cur2) {
    if (!cur1) {
      sortedList.append(cur2.val);
      cur2 = cur2.next;
    } else if (!cur2) {
      sortedList.append(cur1.val);
      cur1 = cur1.next;
    } else if (cur1.val > cur2.val) {
      sortedList.append(cur2.val);
      cur2 = cur2.next;
    } else {
      sortedList.append(cur1.val);
      cur1 = cur1.next;
    }
  }
  return sortedList;
}

let l1 = new SinglyLinkedList();
l1.append(1)
l1.append(3)
l1.append(5)

let l2 = new SinglyLinkedList();
l2.append(2)
l2.append(4)
l2.append(6)

let sortedList = mergeTwoList(l1, l2);

sortedList.print();

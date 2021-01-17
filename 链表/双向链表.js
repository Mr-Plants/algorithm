class NodeList {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/*
思路
增加prev指针
 */
class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  append(val) {
    let guard = new NodeList('');
    guard.next = this.head;
    let cur = guard;
    const newNode = new NodeList(val);

    while (cur.next) {
      cur = cur.next;
    }
    newNode.prev = cur;
    cur.next = this.tail = newNode;
    this.head = guard.next;
    this.length++;
    return newNode;
  }

  /*
  思路：
  head是否为null
    是：head=newNode
    否：tail.next=newNode
        newNode.prev=tail;

  更新尾节点：tail=newNode
   */

  // todo 加入了尾节点就能让链表的新增操作复杂度变为O(1)?
  add(val) {
    const newNode = new NodeList(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  remove(val) {

  }

  insertAfter(node, val) {
    if (!node instanceof NodeList) return;
    const newNode = new NodeList(val);
    newNode.next = node.next;
    node.next = newNode;
  }

  insertBefore(node, val) {

  }

  // 双向链表支持
  removeByPointer(node) {
    if (!node instanceof NodeList) return;

    node.prev = node.next;
  }

  find(val) {

  }

  print() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log(arr.join('->'))
  }

}


let linkedList = new DoublyLinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print();


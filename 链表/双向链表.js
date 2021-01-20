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

  append2(val) {
    let guard = new NodeList('guard');
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

  append(val) {
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

  /*
  思路：
  遍历链表找到值为val的节点，删除
   */
  remove(val) {
    let guard = new NodeList('guard')
    guard.next = this.head;
    let cur = guard;
    while (cur.next) {
      if (cur.next.val === val) {
        cur.next = cur.next.next;
        this.length--;
      } else {
        cur = cur.next;
      }
    }
    this.head = guard.next;
    this.tail = cur;
  }


  insertAfter(node, val) {
    if (!node || !node instanceof NodeList) return;
    const newNode = new NodeList(val);

    const {next} = node;
    newNode.prev = node;
    node.next = newNode;

    newNode.next = next;
    if (node === this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  // 这是和单向链表区别最大的点，因为存储了prev前驱节点，所以可以在O(1)复杂度插入
  /*
  思路：
  1、保存node节点的prev指针，prev可能为null（node=head）
  2、改变newNode的next指针
  3、改变newNode的prev指针
  4、改变node的prev指针
  5、插入可能改变了head指针，需要修正head指针
   */
  insertBefore(node, val) {
    if (!node || !node instanceof NodeList) return;
    const newNode = new NodeList(val);
    let {prev} = node;
    node.prev = newNode;
    newNode.next = node;
    if (prev) {
      prev.next = newNode;
      newNode.prev = prev;
    } else {
      this.head = newNode;
    }

    this.length++;
  }

  // 双向链表支持O(1)时间复杂度内删除一个节点，但是单向链表必须要从头遍历找到被删除节点的prev前驱节点O(n)
  removeByPointer(node) {
    if (!node || !node instanceof NodeList) return;

    let {prev, next} = node;
    // 首先断开自己和链表的关系
    // 不断开好像也没什么关系
    node.prev = null;
    node.next = null;
    // 然后建立新关系
    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }
    if (next) {
      next.prev = prev;
    } else {
      this.tail = prev;
    }

    this.length--;

  }

  find(val) {
    let pos = -1;
    let cur = this.head;
    while (cur) {
      if (cur.val === val) {
        return cur;
      } else {
        cur = cur.next;
      }
    }
    return pos;
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
// const l1 = linkedList.append(1);
// linkedList.append(2);
// linkedList.append(3);
linkedList.insertBefore(linkedList.head, 2333)
// linkedList.insertAfter(linkedList.head, 999)
// linkedList.insertAfter(linkedList.tail, 666)
// linkedList.insertAfter(linkedList.tail, 888)
linkedList.print();

// console.log(linkedList.find(1));

// linkedList.removeByPointer(l1);
linkedList.print();
// linkedList.removeByPointer(linkedList.head);
// linkedList.print();
// linkedList.removeByPointer(linkedList.tail);
// linkedList.insertBefore(linkedList.head, 888)
// linkedList.print();
// linkedList.insertBefore(linkedList.tail, 5656)
// linkedList.print();

/*
todo 重要！！！
写完链表后一定要作如下检查：
1、如果链表是空（head=null），操作是否正常
2、如果链表只有一个元素（head=tail），操作是否正常
3、如果链表有两个元素，操作是否正常
4、如果要操作head或tail，是否正常
5、检查链表的length和head以及tail的值是否更新
6、如果是双向链表，还要检查以下节点的prev属性是否更新
 */

module.exports = {
  DoublyLinkedList
}

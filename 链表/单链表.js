class NodeList {
  val;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/**
 * 单链表实现增删
 */
export default class SinglyLinkedList {
  head = null;
  length = 0;

  /*
  思路：
  如果head不存在，就把head赋值为新节点
  如果head存在，定义cur，将head赋值给cur
  如果cur.next还存在，就继续向下查找，直到cur.next不存在，就找到了尾节点
  将尾节点的next指向新建的节点
   */
  append(val) {
    const node = new NodeList(val);
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      // fixme 此处不能这么写，因为这样会把cur指向null，后续取值会报错
      // while (cur) {
      //   cur = cur.next;
      // }
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length++;
    return node;
  }

  /*
  思路：
  设置prev
   */
  remove(val) {
    let prev;
    let cur = this.head;
    while (cur.next) {
      if (cur.val === val) {
        prev.next = cur.next;
      }
      prev = cur;
      cur = cur.next;
    }
    return this.head;
  }

  print() {
    let cur = this.head;
    let arr = [];
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log(arr.join('->'))
  }

}

let list = new SinglyLinkedList();
list.append(2333)
list.append(666)
list.append(588)
list.append(99)
list.print();
list.remove(99)
list.print();

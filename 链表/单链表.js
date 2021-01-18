class NodeList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * 单链表实现增删
 */
class SinglyLinkedList {
  head = null;
  tail = null;
  length = 0;

  /*
  思路：
  如果head不存在，就把head赋值为新节点
  如果head存在，定义cur，将head赋值给cur
  如果cur.next还存在，就继续向下查找，直到cur.next不存在，就找到了尾节点
  将尾节点的next指向新建的节点
   */
  append2(val) {
    const node = new NodeList(val);
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      // 找到尾节点
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length++;
    return node;
  }

  append(val) {
    let guard = new NodeList('guard');
    guard.next = this.head;
    const newNode = new NodeList(val);
    let cur = guard;
    while (cur.next) {
      cur = cur.next;
    }
    //  cur走到这里时,cur.next肯定是null
    cur.next = this.tail = newNode;
    this.head = guard.next;
    this.length++;
  }

  remove(val) {
    let guard = new NodeList('');
    guard.next = this.head;
    let cur = guard;

    while (cur.next) {
      if (cur.next.val === val) {
        cur.next = cur.next.next;
        this.length--;
        // 删除完以后不需要改变指针，继续从这个节点往下遍历
      } else {
        cur = cur.next;
      }
    }
    this.tail = cur;
    this.head = guard.next;  // 重新定义头指针，防止首节点被删除后，this.head指向没变
  }

  /*
  思路：
  设置prev
   */
  remove2(val) {
    let prev;
    let cur = this.head;
    while (cur) {
      if (cur.val === val) {
        prev.next = cur.next;
        this.length--;
      }
      prev = cur;
      cur = cur.next;
    }
    return this.head;
  }

  /*
  思路：
  1、保存cur的next指针
  2、改变cur的next指针指向prev
  3、改变prev指向cur
  4、改变cur指向保存的next指针
   */
  reverse() {
    let prev;
    let cur = this.head;
    while (cur) {
      const {next} = cur;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.tail = this.head;
    this.head = prev;
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

module.exports = {
  SinglyLinkedList
}

// let list = new SinglyLinkedList();
// list.append(2333)
// list.append(666)
// list.append(588)
// list.append(99)
// list.print();
// list.reverse();
// list.print();

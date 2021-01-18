class NodeList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class CircularLinkedList {
  head = null;
  tail = null;
  length = 0;

  append(val) {
    const newNode = new NodeList(val);
    let pos = 0;

    let guard = new NodeList('guard');
    guard.next = this.head;
    let cur = guard;
    while (cur.next && pos < this.length) {
      cur = cur.next;
      pos++;
    }
    // 找到了tail
    cur.next = this.tail = newNode;
    this.head = guard.next;
    newNode.next = this.head;
    this.length++;
  }

  remove(val) {

  }

  print() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
      // fixme 也可以参考使用pos
      if (cur === this.head) break;
    }
    console.log(arr.join('->'))
  }
}


module.exports = {
  CircularLinkedList
}










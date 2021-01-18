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

  }

  remove(val) {

  }

  print() {
    let arr = [];
    let cur = this.head;
    while (cur.next !== this.head) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log(arr.join('->'))
  }
}














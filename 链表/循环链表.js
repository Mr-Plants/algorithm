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
    while (pos < this.length) {
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
    let guard = new NodeList('guard')
    guard.next = this.head;
    let cur = guard;
    let pos = 0;
    while (pos < this.length) {
      if (cur.next.val === val) {
        cur.next = cur.next.next;
        this.length--;
      } else {
        cur = cur.next;
      }
      pos++;
    }
    this.head = guard.next;
    this.tail = cur;
  }

  print() {
    let arr = [];
    let pos = 0;
    let cur = this.head;
    while (pos < this.length) {
      arr.push(cur.val);
      cur = cur.next;
      pos++;
      // if (cur === this.head) break;   // 不应该使用这种，因为可能是个小环，tail.next !== head
    }
    console.log(arr.join('->'))
  }
}


module.exports = {
  CircularLinkedList
}


let l1 = new CircularLinkedList();
l1.append(1)
l1.append(2)
// l1.append(3)
l1.print();


l1.remove(2)
l1.print();




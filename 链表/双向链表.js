class NodeList {
  val;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/*
思路
增加prev指针
 */
class DoublyLinkedList {
  head = null;
  length = 0;

  append(val) {
    let node = new NodeList(val);
    if (!this.head) {
      this.head = node;
    }else{
      let cur
    }

  }

  find(val) {

  }

}
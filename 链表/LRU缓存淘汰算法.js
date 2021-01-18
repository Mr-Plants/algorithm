/*
思路：
是否有缓存？
  有：把节点移动到首部
  没有：缓存是否满了？
    没满：首部插入新元素
    满了：删除尾元素，首部插入新元素
 */

const {DoublyLinkedList} = require("./双向链表");
const MAX = 5;
let linkedList = new DoublyLinkedList();

function LRU(val) {
  // 使用双向链表比较有优势
  const node = linkedList.find(val);
  if (node !== -1) {
    linkedList.removeByPointer(node);

  } else {
    if (linkedList.length >= MAX) {
      linkedList.removeByPointer(linkedList.tail)
    }
  }
  linkedList.length === 0 ? linkedList.append(val) : linkedList.insertBefore(linkedList.head, val);

}


for (let i = 0; i < 100; i++) {
  LRU(parseInt(Math.random() * 100));
  linkedList.print();
}











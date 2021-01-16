import SinglyLinkedList from './单链表';

/*
思路：
是否有缓存？
  有：把节点移动到首部
  没有：缓存是否满了？
    没满：首部插入新元素
    满了：删除尾元素，首部插入新元素
 */

const MAX = 5;
let linkedList = new SinglyLinkedList();

function LRU(val) {
  // fixme 使用双向链表比较有优势
}

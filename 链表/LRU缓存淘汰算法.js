import SinglyLinkedList from './单链表';

/*
思路：

如果缓存满了，就删除尾节点，再插入元素

缓存没满，插入元素

插入元素时：
如果链表存在这个元素，就把这个元素移动到最前面
如果不存在，就放在最前面

 */

const SIZE = 5;

function LRU(val) {

}

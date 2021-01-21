/*
顺序队列
队尾入队，队首出队
 */
class SequenceQueue {

  constructor(length) {
    this.length = length;
    this.items = new Array(length);
    this.tail = 0;
    this.head = 0;
  }

  enqueue2(val) {
    // tail=length时，代表队列已满
    if (this.tail === this.length) return false;
    this.items[this.tail] = val;
    this.tail++;
  }

  enqueue(val) {
    // enqueue时如果队列满了，需要将head->tail直接的数据搬运到起始位置
    if (this.tail === this.length) {
      if (this.head === 0) return false;
      for (let i = this.head; i < this.tail; i++) {
        this.items[i - this.head] = this.items[i]
      }
      this.tail -= this.head;
      this.head = 0;
    }
    // 搬运完毕
    this.items[this.tail++] = val;
    return true;
  }

  dequeue() {
    // 当head=tail的时候，代表队列已空
    if (this.head === this.tail) return null;
    return this.items[this.head++]
  }

  toString() {
    return this.items;
  }
}

//todo  测试代码有问题！

// test
let queue = new SequenceQueue(5)
for (let i = 0; i < 100; i++) {
  console.log(queue.head, queue.tail)
  console.log(queue.items)
  if (Math.random() < 0.5) {
    queue.enqueue('ran' + parseInt(Math.random() * 100))
  } else {
    queue.dequeue();
  }

}



















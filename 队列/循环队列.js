//

class CircularQueue {
  constructor(length) {
    this.length = length;
    this.head = 0;
    this.tail = 0;
    this.items = new Array(length);
  }

  /*循环队列如何判断队列已满？
  * head在tail前面一个位置，但是这个位置可能在0号位，所以需要对tail+1取模*/
  enqueue(val) {
    if ((this.tail + 1) % this.length === this.head) return false;
    this.items[this.tail] = val;
    this.tail = (this.tail + 1) % this.length;
    return true;
  }

  /*循环队列如何判断队列已空？head=tail*/
  dequeue() {
    if (this.head === this.tail) return null;
    const ret = this.items[this.head];
    this.head = (this.head + 1) % this.length;
    return ret;
  }
}

/*shift+control*/
/*ctrl+j自动代码*/
/*ctrl+e最近文件*/


let queue = new CircularQueue(5);
for (let i = 0; i < 100; i++) {
  console.log(queue.head, queue.tail)

  if (Math.random() < 0.5) {
    const val = 'ran' + parseInt(Math.random() * 100);
    queue.enqueue(val)
    console.log('入栈：', val)
  } else {

    const out = queue.dequeue();
    console.log('出栈：', out)
  }
  console.log(queue.items)
}
























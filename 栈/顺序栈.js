class SequenceStack {
  constructor(size) {
    this.arr = new Array(size);
    this.count = 0;
    this.size = size;
  }

  push(val) {
    if (this.count === this.size) {
      console.log('out of stack size')
      return false;
    }
    this.arr[this.count] = val;
    this.count++;
    return true;
  }

  pop() {
    if (this.count === 0) return null;
    return this.arr[this.count--];
  }

  print() {
    console.log(this.arr)
  }
}


// test
let stack = new SequenceStack(5);
stack.push(1);

stack.push(2);
stack.push(3);
stack.print();
stack.push(4);
stack.push(5);
stack.push(6);
stack.print();
// stack.pop()
// stack.print();
stack.push(9)
stack.print();

class Scheduler {
  constructor(max) {
    this.queue = [];
    this.max = max;
    this.q = 0;
  }

  async add(promiseFunc) {
    this.queue.push(promiseFunc);


  }

  async handle() {
    return new Promise(async (resolve, reject) => {
      const task = this.queue.shift();
      await task();
    })
  }
}


const timeout = (delay) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}


let s = new Scheduler();
let addTask = (delay, i) => {
  s.add(() => timeout(delay))
    .then(res => console.log(res))
}


addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
// log 2 3 1 4
// 设计一个add函数，同时最多执行2个task，完成相应功能

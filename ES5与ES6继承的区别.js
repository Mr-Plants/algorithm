// ES5

function Parent(a) {
  this.a = a
}

function Son(b) {
  this.b = b
}

class Base {
  constructor(a) {
    this.a = a
  }
}

class Sub extends Base {
  constructor(b) {
    // this.b = b  // 会报错，在调用父类的构造函数之前不能使用this
    super(456);
    this.b = b
    // console.log(super)
  }
}


const s = new Son(233)

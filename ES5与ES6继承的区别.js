/*
* ES5 的继承实质是先创造子类的实例对象 this，然后再将父类的方法添加到 this 上面（Parent.apply（this））。
* ES6 的继承机制完全不同，实质是先创造父类的实例对象 this （所以必须先调用super方法），然后再用子类的构造函数修改this。
* ES6内部默认开启严格模式
*/

// ES5

function Person(name, age) {
  console.log('Person start');
  this.name = name;
  this.age = age;
  this.action = ['speak', 'run', 'eat'];
  console.log(this)
  console.log('Person end');
}

Person.prototype.say = function () {
  console.log(`my name is ${this.name} and I am ${this.age} years old!`);
};

function Student(name, age, score) {
  console.log('Student start');
  console.log(this)
  Person.call(this, name, age);  // 借用构造函数, 第一次调用父类构造函数
  this.score = score;
  console.log('Student end');
}

// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;   // 修正构造函数指向
Student.prototype.showScore = function () {
  console.log(`my score is ${this.score}`);
};

let xiaoming = new Student('xiaoming', 23, '78');
xiaoming.action.push('piano');
console.log(xiaoming.action);
xiaoming.say();
xiaoming.showScore();

console.log(xiaoming instanceof Student)
console.log(xiaoming instanceof Person)

console.log('=============================================')

let xiaohua = new Student('xiaohua', 24, '89');
console.log(xiaohua.action);
xiaohua.say();
xiaohua.showScore();

// ES6
class Base {
  constructor(a) {
    console.log('创建父类')
    this.a = a
    console.log(this)  // 如果是通过super调用，此处this会被自动指向子类 Sub
    console.log('创建父类完毕')
  }
}

class Sub extends Base {
  constructor(b) {
    console.log('创建子类')
    // 创建子类时会先创建父类
    // this.b = b  // 会报错，在调用父类的构造函数之前不能使用this
    let ins = super('child');
    // console.log(super)   // 无法打印 SyntaxError: 'super' keyword unexpected here
    console.log(ins)   // super返回父类的实例
    console.log(this === ins)  // true

    this.b = b
    console.log('创建子类完毕')
  }
}


// const s = new Sub(233)

// const b = new Base('father')



const PRIORITY = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

/*
思路：
两个栈
解析到数字放入stack1，
解析到运算符和stack2栈顶元素做对比，如果优先级<=栈顶，就取出两个数运算，把结果放入stack1
否则继续入栈
34+13*9+44-12/3
 */
function calculate(express) {
  let arr = express.split('');

  let stack1 = [];
  let stack2 = [];

  let cb = char => {
    if (isNaN(char)) {
      let head = stack2[stack2.length - 1];

      if (PRIORITY[char] > PRIORITY[head] || !head) {
        stack2.push(char);
      } else {
        let res = math(stack1.pop(), stack1.pop(), stack2.pop());
        stack1.push(res);
        cb(char);
      }
    } else {
      stack1.push(char);
    }
  }

  arr.forEach(cb);

  return math(stack1[0], stack1[1], stack2[0])
}

function math(num1, num2, operator) {
  num1 = Number(num1)
  num2 = Number(num2)
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}


// test

console.log(calculate('4+3*9+5-9/3'))














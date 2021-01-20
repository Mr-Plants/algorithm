let rank = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

/*
思路：
两个栈
解析到数字放入stack1，
解析到运算符和stack2栈顶元素做对比，如果优先级比
 */
function calculate(express) {
  let arr = express.split('');

  let stack1 = [];
  let stack2 = [];

  arr.forEach(char => {
    if (isNaN(char)) {
      let head = stack2[stack2.length - 1];
    } else {
      stack1.push(char);
    }
  })
}


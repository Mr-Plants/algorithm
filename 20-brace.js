var isValid = function (s) {
  let arr = s.split('')
  let stack = []
  const brace = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    // 如果是左括号，就入栈
    if (item in brace) {
      stack.unshift(item)
    } else {  // 如果不是左括号
      // 如果当前右括号和栈顶括号匹配，就出栈
      if (brace[stack[0]] === item) {
        stack.shift()
      } else {
        // 不匹配就直接跳出
        return false
      }
    }
  }
  // 执行完返回栈是否被清空，清空代表完全匹配
  return stack.length === 0
};

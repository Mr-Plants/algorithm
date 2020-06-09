function sum(nums, target) {
  // 统一保管需求
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    // 先看看有没有满足自己需求的
    if (n in obj) {
      // 有就带走
      return [obj[n], i]
    } else {
      // 没有就先把自己的需求记录一下
      obj[target - n] = i
    }
  }
}

const nums = [1,2,3,5,7];
const res = sum(nums, 5)
console.log(res)

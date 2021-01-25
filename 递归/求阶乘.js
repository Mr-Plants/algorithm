// 阶乘
/*
思路：
求递推公式：
如果要求n的阶乘，可以想像为求n-1的阶乘再乘n
递归终止条件：
1!=1

时间和空间复杂度都是O(n)
 */
function factorial(n) {
  if (n <= 2) return n;
  return factorial(n - 1) * n;
}


function factorial2(n) {
  if (n <= 2) return n;
  let ret = 2;
  for (let i = 3; i <= n; i++) {
    ret *= i;
  }
  return ret;
}

console.log(factorial(3))
console.log(factorial(5))
console.log(factorial2(3))
console.log(factorial2(5))

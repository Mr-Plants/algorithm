/*
* 思路
* 推导递推公式
* f(n)=f(n-1)+f(n-2)
* 推导终止条件
* f(0)=0,f(1)=1*/

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2)
}


function fib2(n) {
  if (n <= 1) return n;
  let ret = 0;
  let p1 = 0;
  let p2 = 1;

  for (let i = 2; i <= n; i++) {
    ret = p1 + p2;
    p1 = p2;
    p2 = ret;
  }
  return ret;
}


console.log(fib2(5))

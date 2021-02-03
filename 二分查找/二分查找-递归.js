/*
* 递归思路
* 递推公式
* f(p,q,r)=f(n/2)*/

function binarySearch(arr, value, low, high) {
  if (low > high) return -1;
  // let mid = (low + high) >> 1;  // 不要这么写，可能溢出
  let mid = low + ((high - low) >> 1);  // 按位运算符优先级很低，比加减还低，需要加括号。
  if (arr[mid] === value) return mid;
  if (arr[mid] < value) {
    return binarySearch(arr, value, mid + 1, high);
  } else {
    return binarySearch(arr, value, low, mid - 1);
  }
}

function main(arr, value) {
  return binarySearch(arr, value, 0, arr.length - 1);
}

// test
let arr = [0, 1, 2, 4, 5, 6, 7, 8, 9];

console.log(main(arr, 10))
// console.log(main(arr, 5))
console.log(main(arr, 9))

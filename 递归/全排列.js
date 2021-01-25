/*
* 全排列：给定一个没有重复数字的序列，返回其所有可能的全排列
* 思路：
* 分解问题，推导递推公式
* 要求接n个数的全排列，需要知道n-1个数的全排列，在n-1全排列的基础上会有n个位置可以插入第n个元素
*
* 递归终止条件f(1)=1;一个数只有一种排列方式
* */

function fullPermutation(arr) {
  if (arr.length === 1) return [arr];
  let tail = arr.pop();
  let ret = fullPermutation(arr);
  let tar = [];
  for (let i = 0; i < ret.length; i++) {
    for (let j = 0; j <= ret[i].length; j++) {
      let out = [...ret[i]]
      out.splice(j, 0, tail);
      tar.push(out)
    }
  }
  return tar;
}


function fullPermutation2(arr) {
  if (arr.length === 1) return [arr];
  let tar = [];
  for (let i = 0; i < arr.length; i++) {
    let out = [...arr];
    // return new Array
    let q = out.splice(i, 1)[0];
    for (let j = 0; j <= out.length; j++) {

      if (i === j) {
        continue;
      } else {
        let newArr = [...out];
        newArr.splice(j, 0, q);
        tar.push(newArr);

      }

    }
  }

  return tar;
}

console.log(fullPermutation([1, 2, 3]))
console.log(fullPermutation2([1, 2, 3]))



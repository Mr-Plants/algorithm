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


/*
先取出2个，剩下的元素for循环逐个和前一个(n-1)的全排列做新的全排列
比如有[1,2,3,4]
先取出1，2的全排列，
再将3和1，2的全排列做全排列
再将4和1，2，3的全排列做全排列

todo 时间复杂度为O(n^3)，空间复杂度为O(n!*n)？，为了完成迭代算法需要arr3这个集合
arr3每次都会重置，最多的时候会存储arr的全组合n!*n个元素
 */
function fullPermutation2(arr) {
  if (arr.length === 1) return [arr];

  let p1 = arr.shift();
  let p2 = arr.shift();
  let tar = [[p1, p2], [p2, p1]];
  let arr3 = []
  // 把每一个剩下的元素遍历和arr3排列组合
  for (let i = 0; i < arr.length; i++) {
    let q = arr[i];
    for (let j = 0; j < tar.length; j++) {
      for (let k = 0; k <= tar[j].length; k++) {
        let newArr = [...tar[j]];
        newArr.splice(k, 0, q);
        arr3.push(newArr);
      }
    }
    tar = arr3;   // 加入新一轮循环
    arr3 = [];   // 重置暂存器
  }

  return tar;
}

console.log(fullPermutation([1, 2, 3, 4]))
// todo 有没有更好的思路？
console.log(fullPermutation2([1, 2, 3, 4]))



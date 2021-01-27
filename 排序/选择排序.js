// 选择排序

/*思路
* 每次从未排序区间找到最小的，放到已排序区间末尾*/

function selectionSort(arr) {
  if (arr.length < 2) return arr;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let q;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        q = j;
      }
    }

    // todo 怎么把这段for循环和上一段for合并
    for (let k = q; k > i; k--) {
      arr[k] = arr[k - 1];
    }

    arr[i] = min;
  }

  return arr;
}


// test
let arr = [6, 5, 4, 2, 1, 3]
console.log(selectionSort(arr))
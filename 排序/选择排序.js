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

    // 第一遍写的，怎么把这段for循环和上一段for合并？
    // fuck，迁移什么顺序！直接把两个元素调换位置，放入未排序区间的重新洗牌
    for (let k = q; k > i; k--) {
      arr[k] = arr[k - 1];
    }

    arr[i] = min;
  }

  return arr;
}

/*
* 选择排序空间复杂度为O(1)，属于原地排序
* 选择排序会破坏相同元素的顺序，是不稳定的，比如如下示例
* 1，4(1),4(2),3
* 第一次选择排序后变为1，3，4(2),4(1)
* 排序以后就稳定了，这时两个相同元素的相对位置就变了
* 选择排序的时间复杂度为O(n^2)，最大最小都是O(n^2)*/
function selectionSort2(arr) {
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let flag = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        flag = true;
      }
    }
    // 交换位置，重新洗牌
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
    if (!flag) break;  // 如果已经有序，就提前退出
  }
  return arr;
}

// test
let arr = [6, 5, 4, 2, 1, 3]
let arr2 = [6, 5, 4, 3, 2, 1]
console.log(selectionSort(arr))
console.log(selectionSort2(arr2))

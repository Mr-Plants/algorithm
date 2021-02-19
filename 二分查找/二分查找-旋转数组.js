/*
* 思路
* 旋转数组从中间分开，至少有一边是有序数组*/

function binarySearch(arr, val) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] === val) return mid;

    // todo 这里要怎么判断比较好？
    if (arr[low] < arr[mid]) {

    } else {

    }
  }

  return -1;
}

// test
let arr = [5, 6, 1, 2, 3, 4]
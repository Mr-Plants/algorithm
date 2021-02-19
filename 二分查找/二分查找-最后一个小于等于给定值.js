/*
* 思路
* 如果mid>val 在左区间找high=mid-1
* 如果mid<=val 如果mid是数组最后一个元素 return
* 如果mid下一位>val return
* 在右区间继续寻找low=mid+1*/


function binarySearch(arr, val, low, high) {
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] > val) {
      high = mid - 1;
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] > val) return mid;
      low = mid + 1;
    }
  }

  return -1;
}


function main(arr, val) {
  return binarySearch(arr, val, 0, arr.length - 1);
}


// test
let arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8]
console.log(main(arr, 4))
console.log(main(arr, 5))
console.log(main(arr, 10))
console.log(main(arr, 0))

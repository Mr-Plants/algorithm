/*
* 思路
* 查找到相同元素时
* 如果这个元素已经是数组第一个元素，就return
* 如果这个元素的前一个元素不等于要查找的元素，也return
* 说明查找到的元素不是第一个，继续向前查找（high=mid-1）*/


function binarySearch(arr, val, low, high) {

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] > val) {
      high = mid - 1;
    } else if (arr[mid] < val) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== val) return mid;
      high = mid - 1;
    }
  }

  return -1;
}


function main(arr, val) {
  return binarySearch(arr, val, 0, arr.length - 1);
}


// test

let arr = [1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 8];


console.log(main(arr, 3))
console.log(main(arr, 9))

/*
* 思路
* 查找到相同元素时
* 如果这个元素已经是数组最后一个元素，就return
* 如果这个元素的后一个元素不是要查找的元素，return
* 更新low，在后半区间继续查找low=mid+1*/


function binarySearch(arr, val, low, high) {
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] > val) {
      high = mid - 1;
    } else if (arr[mid] < val) {
      low = mid + 1
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== val) return mid;
      low = mid + 1;
    }
  }

  return -1;
}


function main(arr, val) {
  return binarySearch(arr, val, 0, arr.length - 1)
}

// test
let arr = [1, 2, 3, 3, 3, 3, 3, 4, 5];


console.log(main(arr, 3))
console.log(main(arr, 7))

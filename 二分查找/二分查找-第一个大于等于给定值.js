/*
* 思路
* 如果mid<val low=mid+1
* 如果mid>=val
* 如果mid是数组第一个元素，return
* 如果mid的前一个元素<val，return
* 否则就向前查找 high=mid-1*/


function binarySearch(arr, val, low, high) {
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] < val) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] < val) return mid;
      high = mid - 1;
    }
  }

  return -1;
}


function main(arr, val) {
  return binarySearch(arr, val, 0, arr.length - 1);
}


// test
let arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8]
console.log(main(arr, 5))

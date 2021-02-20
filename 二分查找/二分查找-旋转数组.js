/*
* 思路
* 旋转数组从中间分开，至少有一边是有序数组
* 如果左边是有序的
*   如果元素在左边high=mid-1
*   如果不在左边，就去右边检索*/

function binarySearch(arr, val) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] === val) return mid;

    // todo 这里要怎么判断比较好？参考leeCode33
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= val && val < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // fixme 这里一定不可能val=mid，因为如果这样在前面就return了，但是是有可能等于low或者high的
      // if (arr[mid] <= val && val < arr[high]) {
      if (arr[mid] < val && val <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

// test
let arr = [5, 6, 1, 2, 3, 4]

console.log(binarySearch(arr, 9))

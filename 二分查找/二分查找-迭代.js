// 二分查找

/*时间复杂度为O(log n *O(1)=O(logN)*/
function binarySearch(arr, value, low, high) {

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] === value) return mid;
    if (arr[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}


function main(arr, value) {
  return binarySearch(arr, value, 0, arr.length - 1);
}


// test
let arr = [1, 2, 3, 5, 6, 7, 8, 9]
console.log(main(arr, 5))
console.log(main(arr, 11))

/*
* 思路
* 从未排序区间按顺序取出元素，插入到已排序区间，并保证已排序区间继续有序*/

function insertionSort(arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }

    arr[j + 1] = value;
  }

  return arr;
}


// test
let arr = [3, 5, 1, 2, 6, 4]
console.log(insertionSort(arr))
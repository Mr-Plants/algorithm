// 插入排序
/*思路：
* 维护一个有序集合，
* 遍历目标集合，每次取出一个元素放入有序集合，并确保继续有序*/


function insertionSort(arr) {
  let tar = [];
  for (let i = 0; i < arr.length; i++) {
    // 这里一定要从tar头部插入，因为是从头部开始遍历，否则排序不对
    tar.unshift(arr[i]);
    for (let j = 0; j < tar.length - 1; j++) {
      if (tar[j] > tar[j + 1]) {
        let temp = tar[j + 1];
        tar[j + 1] = tar[j]
        tar[j] = temp;
      }
    }
  }
  return tar;
}

/*
* 思路
* */
function insertionSort2(arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


// test
let arr = [6, 5, 4, 3, 2, 1]
console.log(insertionSort2(arr))

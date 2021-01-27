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
* 从未排序区间取出一个元素
* 和已排序区间元素循环比较，找到插入位置
* 时间复杂度O(n^2)
* 空间复杂度是O(1)，是原地排序算法
* 不会改变相同元素前后顺序，属于稳定排序
* */
function insertionSort2(arr) {
  if (arr.length < 2) return arr;

  // i=1是因为需要给已排序空间默认一个元素，才能继续对比
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    // fixme 这里倒序比正序代码简洁很多，值得思考
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        // should move
        arr[j + 1] = arr[j];
      } else {
        // 此时j+1就是应该插入的位置
        break;
      }
    }
    // insert value
    arr[j + 1] = value;
  }
  return arr;
}


function insertionSort3(arr) {
  if (arr.length < 2) return arr;
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let q = 0;
    for (let j = 0; j < i; j++) {
      if (value >= arr[j]) {
        q = j;
      } else {
        break;
      }
    }
    // 显然直接倒序要简单得多
    for (let k = i - 1; k >= q; k--) {
      arr[k + 1] = arr[k];
    }
    arr[q] = value;
  }
  return arr;
}


// test
let arr = [6, 5, 4, 3, 2, 1]
let arr2 = [6, 5, 4, 3, 2, 1]
console.log(insertionSort2(arr))
console.log(insertionSort3(arr2))

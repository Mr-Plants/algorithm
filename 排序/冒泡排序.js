/*
冒泡排序
思路：
循环长度为n的数组，冒泡n次
每次冒泡，对比自己和下一位元素，如果比下一位大，就向右冒泡（交换位置）
 */

function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      let a = arr[i];
      let b = arr[i + 1];
      if (a > b) {
        arr[i] = b;
        arr[i + 1] = a;
      }
    }
    console.log(arr)
  }

  return arr
}


// 优化后
/*时间复杂度：
最好时间复杂度:O(1)，数据已经排好序
最坏时间复杂度：O(n^2)，数据完全无序（倒序）
* 空间复杂度：O(1) 属于原地排序
* 只有左边比右边大的时候才会调换位置，相等不调换，所以冒牌排序是稳定的排序算法*/
function bubbleSort2(arr) {
  for (let j = 0; j < arr.length; j++) {
    let flag = false;  // 如果已经稳定，就不需要再遍历
    // 每次至少有一个已经稳定冒泡到对应的位置，已经冒泡稳定的元素不需要再参与遍历
    for (let i = 0; i < arr.length - j - 1; i++) {
      let a = arr[i];
      let b = arr[i + 1];
      if (a > b) {
        arr[i] = b;
        arr[i + 1] = a;
        flag = true;
      }
    }
    console.log(arr);
    if (!flag) break
  }

  return arr
}

const test = [5, 1, 2, 3, 4]
const test2 = [5, 1, 2, 3, 4]
bubbleSort(test);
console.log('===================')
bubbleSort2(test2);

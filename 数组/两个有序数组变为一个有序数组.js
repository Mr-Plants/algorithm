/*
思路
1、定义游标k=0，j=0，定义循环次数i=最短数组长度；定义空数组arr，length=arr1.length+arr2.length
2、开始循环，每次取arr1[k]和arr2[j]比较大小，小的放进arr，同时k++或者j++
3、只要任意一个数组循环完毕就终止for循环
 */


function concat(arr1, arr2) {
  let j = 0;
  let k = 0;
  let q = 0;
  let len = arr1.length + arr2.length;
  let arr = new Array(len);

  for (let i = 0; i < len; i++) {
    if (arr1[j] < arr2[k]) {
      arr[i] = arr1[j];
      j++;
    } else {
      arr[i] = arr2[k];
      k++;
    }
    if (j === arr1.length || k === arr2.length) {
      // 记录循环结束的位置
      q = i + 1;
      break;
    }
  }

  if (j === arr1.length) {
    for (let i = k; i < arr2.length; i++) {
      arr[q] = arr2[i];
      q++;
    }
  }

  if (k === arr2.length) {
    for (let i = j; i < arr1.length; i++) {
      arr[q] = arr1[i];
      q++;
    }
  }

  return arr;

}


// test

let arr = concat([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])

console.log(arr)

console.log(concat([1, 10], [2, 4, 6, 8]))
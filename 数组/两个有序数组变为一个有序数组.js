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

function merge(arr1, arr2) {
  let pa = 0, pb = 0;
  let len1 = arr1.length, len2 = arr2.length;
  let sortedArr = new Array(len1 + len2);

  while (pa < len1 || pb < len2) {
    // 如果a已经遍历完了，直接放入b
    // 如果b已经遍历完了，直接放入a
    // 如果a<b 放入a
    // 放入b
    if (pa === len1) {
      sortedArr[pa + pb] = arr2[pb++];
    } else if (pb === len2) {
      sortedArr[pa + pb] = arr1[pa++];
    } else if (arr1[pa] > arr2[pb]) {
      sortedArr[pa + pb] = arr2[pb++];
    } else {
      sortedArr[pa + pb] = arr1[pa++];
    }
  }
  return sortedArr;
}

// todo 方法3，合并为一个数组，排序！快排学完补充

// test
let arr1 = [1, 3, 5, 7, 9], arr2 = [2, 4, 6, 8, 10]

console.log(concat(arr1, arr2))
console.log(merge(arr1, arr2))












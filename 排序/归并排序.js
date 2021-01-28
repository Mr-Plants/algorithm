//归并排序

/*
* 思路
* 递归分解问题，将最小单位（2个元素）数组排序
* 递推公式推导
* mergeSort(n)= mergeSort(p,q) && mergeSort(q+1,r)  q=length/2
* 终止条件
* 当数组长度为2时，比如下表为[0-1]，此时q=(0+1)/2=0,对于第一个mergeSort(p,q)，p=0,q=0，就可以终止分解（递）了
* */


function mergeSort(arr, p, r) {
  if (p >= r) return;
  let q = Math.floor((p + r) / 2);

  mergeSort(arr, p, q);
  mergeSort(arr, q + 1, r);

  merge(arr, p, q, r);
}

/**
 * 合并两个有序数组片段为一个有序数组
 */
function merge(target, p, q, r) {
  let i = p;
  let j = q + 1;
  let arr = [];

  while (i <= q || j <= r) {
    if (i > q) {
      // 左边已经遍历完了
      arr[j] = target[j];
      j++;
    } else if (j > r) {
      arr[i] = target[i];
      i++;
    } else if (target[i] <= target[j]) {
      arr[i] = target[i];
      i++;
    } else {
      arr[j] = target[j];
      j++;
    }
  }

  // 搬运
  for (let k = 0; k < arr.length; k++) {
    target[k] = arr[k];
  }
}

// 启动函数
function main(arr) {
  mergeSort(arr, 0, arr.length - 1);
}

// test
let arr = [2, 4, 3, 1]
main(arr)
console.log(arr)

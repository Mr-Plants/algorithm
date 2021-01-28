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
  let k = 0;

  // while (i <= q || j <= r) {
  //   // 这里不能先判断target[i]和target[j]的大小，因为此时i已经大于q，已经越界，应该保存target[j]
  //   // 但是i越界后等于j，所以target[i] = target[j]，条件成立，结果又保存了target[i]
  //   // 此时i已经越过数组边界，target[i]取值为undefined
  //   // 这时才判断条件j>r是否成立，此时j=r，判断没有越界，再次保存target[j]，因为target[i] = target[j]，所以就存了两个重复的值
  //   if (target[i] <= target[j] || j > r) {
  //     arr[k++] = target[i++];
  //   } else {
  //     arr[k++] = target[j++];
  //   }
  // }

  while (i <= q || j <= r) {
    if (i > q) {
      arr[k++] = target[j++];
    } else if (j > r) {
      arr[k++] = target[i++];
    } else if (target[i] <= target[j]) {
      arr[k++] = target[i++];
    } else {
      arr[k++] = target[j++];
    }
  }


  // 搬运
  // 可以用，但语义化不好
  // while (p<=r) {
  //   target[r--] = arr[--k]
  // }

  for (let b = 0; p <= r; p++) {
    target[p] = arr[b++];
  }
}

// 启动函数
function main(arr) {
  mergeSort(arr, 0, arr.length - 1);
}

// test
let arr = [5, 3, 2, 1, 4]
main(arr)
console.log(arr)

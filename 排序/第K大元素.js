/*
* O(n)时间复杂度内找到第k大元素
* 所谓第几大，就是排序好的元素下标+1
* 选取一个点作为pivot分区点，将数组分为三部分，如果p+1=k，则p为要求的点
* 如果p+1<k，则第k大元素在右边分区，否则在左边，继续递归
* 递推公式推导
* find(q,r,k)=partition + find(q,p-1) || find(p+1,r)
* 终止条件p>=r
*
* */

function findKthLargest(arr, q, r, k) {
  if (q >= r) return arr[q];
  let p = partition(arr, q, r);
  if (p + 1 === k) {
    return arr[p];
  }
  // 在更小区间
  if (p + 1 < k) {
    return findKthLargest(arr, p + 1, r, k);
  }

  return findKthLargest(arr, q, p - 1, k);
}

function partition(arr, q, r) {
  let pivot = arr[r];
  let j = q;
  for (let i = q; i < r; i++) {
    if (arr[i] > pivot) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  let temp = arr[j];
  arr[j] = arr[r];
  arr[r] = temp;
  return j;
}


// test

let arr = [2, 5, 1, 7, 5, 8];
console.log(findKthLargest(arr, 0, arr.length - 1, 4))
console.log(arr)
// 思路：
// 找到一个分区节点pivot，将数组中比pivot值小的放左边，大的放右边
// 递归左右区间，内部继续分区
// 最后合并左右分区，就是有序的集合了


function quick_sort(arr, p, r) {
  if (p >= r) return;
  let q = partition(arr, p, r);
  quickSort(arr, p, q - 1);
  quickSort(arr, q + 1, r);

}

/*
分区算法
取最后一个节点
设置两个游标i，j  保证[p,i]的都是已处理的元素（比pivot小）
 */
function partition(arr, p, r) {
  let pivot = arr[r];   // 取最后一个
  let i = p;

  for (let j = p; j < r; j++) {
    if (arr[j] < pivot) {
      // swap them
      let temp = arr[i];
      arr[i++] = arr[j];
      arr[j] = temp;
    }
  }

  // swap i & r(pivot)

  let temp = arr[i];
  arr[i] = arr[r];
  arr[r] = temp;
  return i;
}

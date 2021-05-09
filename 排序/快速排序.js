// 快速排序
/*
* 思路
* 利用递归思想，在一组数据中选择一个点作为分界点，比分界点小的放到左边，大的放到右边，总共分为三部分，再递归
* 递推公式推导
* sort(p,r)=sort(p,q-1)+sort(q+1,r)
* 终止条件
* p>=r*/

/*
* 空间复杂度为O(1)，是原地排序
* 排序过程中arr[i]和arr[j]交换可能会破坏相同元素顺序，所以不是稳定排序
* 时间复杂度为n*logN
* */
function quickSort(arr, p, r) {
  if (p >= r) return;

  let q = partition(arr, p, r);

  quickSort(arr, p, q - 1);
  quickSort(arr, q + 1, r);
}

/**
 * 在[p-r]之间选择一个节点q，比q小的放到左边，大的放右边
 * 因为快排是原地排序，所以空间复杂度要为O(1)，所以需要直接改变原数组
 * @param arr
 * @param p
 * @param r
 */
function partition(arr, p, r) {
  let pivot = arr[r];   // 虽然pivot的值没有变过，但是有可能会使用三点取中法等等，不一定总是取最后一位，所以最好保存为变量
  let i = p;

  /*
  初步结论
  1、i停留的位置一定是>=pivot的
  2、最终j=r
  3、pivot的值始终没变过
  4、走进这个方法length>=2

  可以推导的结论
  假设数据是[2,1,4,2]
  [1,2,4,2]
  交换2
  如果是<=
  [2,1,4,2]
  [2,1,4,2]

  1、分区算法会破坏稳定性，能不能把条件改成<=?
  2、可以把判断条件该外<=，但是依然会破坏稳定性，而且会增加不必要的操作，自己更换自己

  * */
  for (let j = p; j < r; j++) {
    if (arr[j] < pivot) {
      let temp = arr[i];
      arr[i++] = arr[j];
      arr[j] = temp;
    }
  }

  let temp = arr[i];
  arr[i] = arr[r];
  arr[r] = temp;
  return i;
}

function main(arr) {
  quickSort(arr, 0, arr.length - 1);
}


// test
let arr = [3, 6, 2, 8, 5, 1];
// let arr = [2,1,4,2];
main(arr)
console.log(arr)















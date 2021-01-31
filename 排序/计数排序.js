// 计数排序
/*思路
* 1、扫描数据，找到数据范围
* 2、根据数据范围创建max+1个桶
* 3、循环放入桶中（计数）
* 4、顺序求和
* 5、倒序遍历（关键），因为上一部顺序求和每一个位置记录的都是小于或等于某个元素的个数*/

/*
* 空间复杂度O(n)不属于原地排序
* 不会改变相同元素顺序，稳定排序
* 时间复杂度为O(n)*/
function countingSort(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  let buckets = new Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    buckets[arr[i]]++;
  }
  console.log(buckets)

  for (let i = 1; i < buckets.length; i++) {
    buckets[i] += buckets[i - 1];
  }
  console.log(buckets);

  let ret = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let index = buckets[arr[i]] - 1
    ret[index] = arr[i];
    buckets[arr[i]]--;
  }

  return ret;
}


// test
let arr = [3, 0, 2, 3, 1, 2, 5, 0, 2];
console.log(countingSort(arr))
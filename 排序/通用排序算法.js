/*通用排序算法
* 需要考虑的点
* 1、因为要通用，不能选择线性排序，因为对数据要求比较严格
* 2、小数据情况下(length<=10)不使用递归算法（快排）,使用插入排序
* 3、使用原地排序算法，减少内存占用
* 4、对边界情况使用哨兵减少代码判断，提高性能
* 5、快排中使用三数取中法找pivot分区点（如果样本数量足够大，中间点可能要变）
* 6、递归深度要进行限制（或者使用系统栈大小）*/


function sort(arr) {
  if (arr.length < 2) return arr;

  let insertSort = arr => {
    if (arr.length < 2) return arr;
    for (let i = 1; i < arr.length; i++) {
      let value = arr[i];
      let j = i - 1;
      for (; j >= 0; j--) {
        if (arr[j] > value) {
          arr[j + 1] = arr[j];
        } else {
          break;
        }
      }
      arr[j + 1] = value;
    }
    return arr;
  }

  let partition = (arr, from, to) => {
    let v0 = arr[from];
    let v1 = arr[to];
    const third_index = (from + to) >> 1;
    let v2 = arr[third_index];

    if (v0 >= v1) {

    }
  }

  let quickSort = (arr, from, to) => {
    if (from >= to) return arr;

    if (arr.length <= 10) return insertSort(arr);

    let pivot = partition(arr, from, to);

    quickSort(arr, from, pivot - 1);
    quickSort(arr, pivot - 1, to);
  }

  quickSort(arr, 0, arr.length - 1);

  return arr;
}

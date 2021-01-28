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


}

/**
 * 合并两个有序数组为一个有序数组
 * @param target
 * @param source1
 * @param source2
 */
function merge(target, source1, source2) {

}

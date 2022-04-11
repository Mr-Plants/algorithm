/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1 和nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 */


/**
 * 如果数组长度是偶数，就返回length/2，length/2 - 1平均值。否则返回 Math.floor(length/2)
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {

}


// test
const a = [1, 2, 3], b = [4, 5, 6, 7]
console.log(findMedianSortedArrays(a, b))
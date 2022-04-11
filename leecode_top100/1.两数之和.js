// 给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // 保存遍历过的值,key是number，value是索引
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        // 如果map中已经有可以配对的值，就return
        let v = target - nums[i];
        if (typeof map[v] !== "undefined") {
            return [map[v], i]
        }
        map[nums[i]] = i;
    }

    return []
}


// test
const arr = [1, 1, 5, 2, 4, 6, 8, 6, 7];

console.log(twoSum(arr, 5))
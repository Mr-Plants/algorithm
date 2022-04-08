// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。


/**
 * 使用一个map存储遍历过的字符，默认最大长度0
 * 遍历字符串 如果map里面已经有这个字符，表示已经开始重复，
 *      比较map长度和最大长度，if obj.length>max max = obj.length
 *      清空map
 * 把这个字符保存进map
 * 判断当前return obj.length>max? obj.length:max
 */


/**
 * 设置一个游标j，表示相同字母出现的位置
 */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let map = {};
    let max = 0;
    let start = -1;
    for (let i = 0; i < s.length; i++) {
        let v = s[i];  // 当前项的值
        // 如果obj中已经存储了v
        if (typeof map[v] !== "undefined" && map[v] !== false && map[v] > start) {
            start = map[v];
            map[v] = false;
        }
        if (i - start > max) max = i - start;
        map[v] = i;
    }

    return max;
}


// test
let a = 'acbcsec';
console.log(lengthOfLongestSubstring(a));

/**
 * max=0
 * start=0 i=4
 * 从0开始循环字符串
 * 如果遇到重复（map[s[i]] !== undefined && map[s[i]] !== false），start=map[s[i]] 设置为开始位置的索引,map[s[i]] = false
 * 如果当前不重复长度大于max就重置max，if(i-start)>max; max = (i-start)
 * map[s[i]] = i 保存当前字符
 * return max
 */
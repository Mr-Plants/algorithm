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
let a = 'acbbc';
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

// 官方
function lengthOfLongestSubstring_(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i !== 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
}


// lengthOfLongestSubstring_('abcae')
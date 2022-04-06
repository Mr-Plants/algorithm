// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。


/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let obj = {};
    let n = 0;
    let length = 0;
    for (let i = 0; i < s.length; i++) {
        let v = s[i];
        // 如果obj中已经存储了v，就代表重复了，需要保存长度，清空obj
        if (obj[v]) {
            if (n > length) length = n;
            obj = {};
            n = 0;
        }
        obj[v] = 1;
        n++;
    }

    return length || n;
}


// test
let a = 'abcabcssdedee';
console.log(lengthOfLongestSubstring(a));

/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 */


/*
设置 stack = []

取出元素，入栈
 */

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {

}


function longestPalindrome1(s) {
    let len = s.length;
    if (len < 2) {
        return s;
    }

    let maxLen = 1;
    let begin = 0;
    // dp[i][j] 表示 s[i..j] 是否是回文串
    let dp = new Array(len).fill(undefined).map(i => new Array(len).fill(false));
    // 初始化：所有长度为 1 的子串都是回文串
    for (let i = 0; i < len; i++) {
        dp[i][i] = true;
    }

    // 递推开始
    // 先枚举子串长度
    for (let L = 2; L <= len; L++) {
        // 枚举左边界，左边界的上限设置可以宽松一些
        for (let i = 0; i < len; i++) {
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            let j = L + i - 1;
            // 如果右边界越界，就可以退出当前循环
            if (j >= len) {
                break;
            }

            // 如果开头和结尾的字符不相同
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                // 开头和结尾相同分两种情况，如果只有2位，就是回文字符串，否则需要继续动态规划
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
}


// test
console.log(longestPalindrome1('ababac'))
// weight:物品重量，n:物品个数，w:背包可承载重量
function knapsack(weight, n, w) {
    const states = new Array(n).fill(undefined).map(() => new Array(w + 1).fill(0));
    states[0][0] = 1;  // 第一行的数据要特殊处理，可以利用哨兵优化

    if (weight[0] <= w) {
        states[0][weight[0]] = 1;
    }
    for (let i = 1; i < n; i++) { // 动态规划状态转移
        for (let j = 0; j <= w; j++) { // 不把第i个物品放入背包
            // 如果上一层是true，则这一层也是true
            if (states[i - 1][j] === 1) states[i][j] = states[i - 1][j];
        }
        for (let j = 0; j <= w - weight[i]; j++) { // 把第i个物品放入背包
            if (states[i - 1][j] === 1) states[i][j + weight[i]] = 1;
        }
    }

    for (let i = w; i >= 0; i--) { // 输出结果
        if (states[n - 1][i] === 1) return i;
    }
    return 0;
}

/*
遍历所以物品

每个物品分两种情况
1、装入袋中
2、不装入袋中 ，把前一层拷贝一遍

倒序遍历最后一层，找出最接近装载重量的索引返回
 */

console.log(knapsack([2, 2, 4, 6, 3], 5, 9))


function knapsack2(items, n, w) {
    const states = new Array(w + 1).fill(0); // 默认值false
    states[0] = 1;  // 第一行的数据要特殊处理，可以利用哨兵优化
    if (items[0] <= w) {
        states[items[0]] = 1;
    }
    for (let i = 1; i < n; ++i) { // 动态规划
        // w 初始值为背包
        for (let j = w - items[i]; j >= 0; --j) {//把第i个物品放入背包
            if (states[j] === 1) states[j + items[i]] = 1;
        }
        console.log(states)
    }
    for (let i = w; i >= 0; --i) { // 输出结果
        if (states[i] === 1) return i;
    }
    return 0;
}

knapsack2([2, 2, 4, 6, 3], 5, 9)
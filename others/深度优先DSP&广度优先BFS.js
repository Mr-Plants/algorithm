const tree = require('./tree.js')

// 深度优先是指对每一个分支路径深入到不能再深入为止，并且每个节点只访问一次

function dfs(data) {
  data.forEach(item => {
    console.log(item.name)
    dfs(item.children)
  })
}

// 看完二叉树算法再补齐
dfs(tree)

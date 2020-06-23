class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class BinaryTree {
  sameTree(p, q) {
    // 如果p，q都是null，则相等
    if (p == null && q == null) {
      return true
    }
    if (p == null || q == null) {
      return false
    }
    if (p.val !== q.val) {
      return false
    }

    // p，q的value相同，递归判断左右子树
    return this.sameTree(p.left, q.left) && this.sameTree(p.right, q.right)

  }


}

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class BinaryTree {
  /**
   * 两个tree是否相同
   * @param p
   * @param q
   * @returns {boolean|*}
   */
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

  /**
   * 反转二叉树
   * @param root
   * @returns {*}
   */
  reverseTree(root) {
    if (root == null) {
      return root
    }
    const left = root.left
    root.left = this.reverseTree(root.right)
    root.right = this.reverseTree(left)
    return root
  }


}

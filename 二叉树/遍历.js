const tree = {
    data: 'A',
    left: {
        data: 'B',
        left: {
            data: 'D'
        },
        right: {
            data: 'E'
        }
    },
    right: {
        data: 'C',
        left: {
            data: 'F'
        },
        right: {
            data: 'G'
        }
    }
}

/**
 * 中序遍历：左节点->自己->右节点
 * @param root
 */
function inOrder(root) {
    if (!root) return;
    inOrder(root.left);
    console.log(root.data)
    inOrder(root.right);
}

/**
 * 前序遍历：自己->左节点->右节点
 * @param root
 */
function preOrder(root) {
    if (!root) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}

/**
 * 后续遍历：左节点->右节点->自己
 * @param root
 */
function postOrder(root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data)
}


// test
// inOrder(tree);   // D,B,E,A,F,C,G
// preOrder(tree);   // A,B,D,E,C,F,G
postOrder(tree);   // D,E,B,F,G,C,A

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

function traverse(root) {
    const queen = [];
    queen.push(root);
    while (queen.length) {
        let top = queen.pop();
        console.log(top.data)
        top.left && queen.unshift(top.left)
        top.right && queen.unshift(top.right)
    }

}


// test

traverse(tree)
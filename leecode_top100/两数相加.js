/**
 * 给你两个非空 的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

class NodeList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedNodeList {
    head = null;
    tail = null;
    length = 0;

    append(val) {
        let guard = new NodeList('guard');
        guard.next = this.head;
        let cur = guard;
        while (cur.next) {
            cur = cur.next;
        }
        let newNode = new NodeList(val);
        cur.next = this.tail = newNode;
        this.head = guard.next;
        this.length++;
    }
}


// test
let a = new LinkedNodeList();
a.append(1)
a.append(3)
a.append(5)

let b = new LinkedNodeList();
b.append(2)
// b.append(4)
// b.append(6)

function reverseLinkedNodeList2String(head) {
    let arr = [];
    let cur = new NodeList('guard');
    cur.next = head;
    while (cur.next) {
        arr.push(cur.next.val);
        cur = cur.next;
    }
    return arr.reverse().join('');
}

let numA = +reverseLinkedNodeList2String(a.head);
let numB = +reverseLinkedNodeList2String(b.head);

let numC = numA + numB;
let strC = numC + '';

let res = new LinkedNodeList();
for (let i = strC.length - 1; i >= 0; i--) {
    res.append(strC.charAt(i))
}

console.log(res)



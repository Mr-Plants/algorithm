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
b.append(6)
b.append(9)

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

// let numA = +reverseLinkedNodeList2String(a.head);
// let numB = +reverseLinkedNodeList2String(b.head);
//
// let numC = numA + numB;
// let strC = numC + '';
//
// let res = new LinkedNodeList();
// for (let i = strC.length - 1; i >= 0; i--) {
//     res.append(strC.charAt(i))
// }
//
// console.log(res)

/**
 * 思路
 * 1、取出两个数的同一位（有可能一个取不到，取不到就补0）
 * 2、将两数相加（有可能不是个位数，需要考虑前一位的进位）
 * 3、相加得到的结果求余数得到最终结果的一位
 * 4、相加得到的结果除10向下取整得到进位
 * 5、设置目标链表的head和tail（考虑head不存在时）
 * 5、改变游标，继续下一位
 */

function addTwoNumbers(l1, l2) {
    let head, tail, carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new NodeList(sum % 10);
        } else {
            tail.next = new NodeList(sum % 10);
            tail = tail.next;
        }

        carry = Math.floor(sum / 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0) tail.next = new NodeList(carry);
    return head
}

console.log(addTwoNumbers(a.head, b.head))








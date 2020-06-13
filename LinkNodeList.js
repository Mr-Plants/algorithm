class NodeList {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkNodeList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 插入一条数据
  append(val) {
    let nodeList = new NodeList(val)
    let cur = null
    // 表头元素不存在
    if (!this.head) {
      this.head = nodeList
    } else {
      cur = this.head
      // 如果cur存在下一个节点，就继续往下找
      while (cur.next) {
        cur = cur.next
      }
      // 找到最后一个赋值
      cur.next = nodeList
    }
    this.length += 1
  }

  /**
   * 移除所有值等于val的链条
   * 将prev的next指向cur.next，把cur的next指向取消
   * @param val
   */
  remove(val) {
    let prev
    let cur = this.head
    while (cur) {

      if (cur.val === val) {
        // 删除表头元素
        if (cur === this.head) {
          this.head = cur.next
          // cur = cur.next
        } else {
          prev.next = cur.next
          // cur.next = null
        }
        this.length -= 1
      } else {
        // 如果不删除，就继续向下查找

      }
      // 更新prev和next
      prev = cur
      cur = cur.next

    }
  }

  print() {
    // 将链表的值存入数组，join展示
    let cur = this.head
    let res = []

    while (cur) {
      res.push(cur.val)
      cur = cur.next
    }
    return res.join('->')
  }
}

// test code
let ln = new LinkNodeList()
ln.append('A')
ln.append('B')
ln.append('B')
ln.append('C')
console.log(ln.print(), ln.length)
ln.remove('B')  // todo 有问题
console.log(ln.print(), ln.length)

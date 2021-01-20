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
    return nodeList
  }

  /**
   * 移除所有值等于val的链条
   * 将prev的next指向cur.next，把cur的next指向取消
   * @param val
   */
  remove(val) {
    // let prev
    // let cur = this.head
    // while (cur && cur.next) {
    //
    //   if (cur.val === val) {
    //     // 删除表头元素
    //     if (cur === this.head) {
    //       this.head = cur.next
    //     } else {
    //       prev.next = cur.next
    //       // cur.next = null
    //       // 删除时prev应该不变
    //     }
    //     this.length -= 1
    //   } else {
    //     // 如果不删除，就继续向下查找
    //     prev = cur
    //   }
    //   // 更新prev和next
    //
    //   cur = cur.next
    //
    // }

    // 2020.6.20使用哨兵模式优化，哨兵的next指向head
    // 这样就不需要单独为head做处理，简化逻辑
    // a=>b=>c=>d
    let ele = {
      next: this.head
    }
    let cur = ele

    while (cur.next) {
      if (cur.next.val === val) {
        cur.next = cur.next.next
      } else {
        cur = cur.next
      }
    }
    this.head = ele.next
  }

  reverse() {
    // 遍历节点，将cur节点的next指向prev，head节点指向null
    let cur = this.head
    let prev = null
    // let next = null

    while (cur) {
      // next可以作为局部变量
      // const next = cur.next
      // cur.next = prev
      // prev = cur
      // cur = next

      // 使用ES6解构语法，骚操作，省去一个next本地变量
      [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    this.head = prev


  }

  // 判断是否有环
  // 也可以通过set唯一性来做，每次存进去，如果下次在set中发现相同的节点就证明有环
  hasCycle() {
    // 如果存在环，则会进入死循环
    // 使用快慢指针
    let fast = this.head
    let slow = this.head
    while (fast.next) {
      // 快指针每次前进两步，慢指针每次前进一步
      fast = fast.next.next
      slow = slow.next
      // 如果快指针等于慢指针（操场跑圈，快的人一定能追上慢的人），则代表有环
      if (fast === slow) {
        return true
      }
    }
    // 能循环完表示没有环
    return false
  }

  // 找到环形节点的第一个节点，如果没有环形节点，就返回null
  detectCycle() {
    let fast = this.head
    let slow = this.head
    let start = this.head
    while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
      if (slow === fast) {
        while (start && slow) {
          // 条件写在上面是因为如果是一个完全的闭环，则链表的第一个节点就是环的第一个节点，如果写在下面，就会return错误的节点
          if (start === slow) {
            return slow
          }
          slow = slow.next
          start = start.next
        }
      }

    }

    return null  // 走到这里，说明没有环
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
let a = ln.append('A')
ln.append('B')
ln.append('B')
ln.append('C')
let d = ln.append('D')
console.log(ln.print(), ln.length)
ln.remove('B')  // 有问题
console.log(ln.print(), ln.length)
ln.reverse()
console.log(ln.print())

console.log('有环：' + ln.hasCycle())
a.next = d
console.log('有环：' + ln.hasCycle())

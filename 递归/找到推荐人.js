const data = [
  {
    actor_Id: 'A',
    referrer_id: null
  },
  {
    actor_Id: 'B',
    referrer_id: 'A'
  },
  {
    actor_Id: 'C',
    referrer_id: 'B'
  },
  {
    actor_Id: 'D',
    referrer_id: ''
  },
  {
    actor_Id: 'E',
    referrer_id: 'D'
  },
  {
    actor_Id: 'F',
    referrer_id: 'E'
  },
]

// 时间复杂度O(n)，空间复杂度O(n)
function findRootReferrer(actorID) {
  const actor = data.find(i => i.actor_Id === actorID);
  if (!actor.referrer_id) return actorID;
  // 找到推荐人
  return findRootReferrer(actor.referrer_id);
}


// test
console.log(findRootReferrer('C'))
console.log(findRootReferrer('D'))
console.log(findRootReferrer('E'))


/*递推公式
* 首先缩小问题规模：
* 要找到我的最终推荐人，需要先找到我的推荐人是谁，再找推荐人的推荐人
* 递归结束条件就是找不到新的推荐人*/

// fixme 递归的时间复杂度分析  https://www.zhihu.com/question/63075755

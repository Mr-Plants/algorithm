/*
思路

是否已有缓存？
有，移动到头部（不需要判断缓存是否已满）
没有，缓存是否已满？
已满，删除尾节点，插入到头部
没满，插入到头部
 */


const MAX = 5;
const cache = [];

function LRU(val) {
  let flag;
  let i = 0;
  for (; i < cache.length; i++) {
    if (cache[i] === val) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    if (cache.length >= MAX) {
      cache.pop();
      cache.unshift(val);
    } else {
      cache.unshift(val);
    }
  } else {
    cache.splice(i, 1);
    cache.unshift(val);
  }
}


// test
for (let i = 0; i < 100; i++) {
  LRU(parseInt(Math.random() * 100 + ''))
  console.log(cache)
}
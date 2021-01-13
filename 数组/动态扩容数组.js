// 实现一个支持动态扩容的数组

/*
思路
1、设置变量i=0
2、判断i是否等于数组长度
3、如果不等就push一个元素，i++
4、如果等于就改变当前数组长度为2倍，循环将老数组元素复制到新数组，继续步骤3
 */

let i = 0;
let arr = new Array(2);

function insert(val) {
  if (i === arr.length) {
    const length = arr.length;
    const newArr = new Array(length * 2);
    for (let j = 0; j < length; j++) {
      newArr[j] = arr[j];
    }
    arr = newArr;
  }
  arr[i] = val;
  i++;
}


// test
for (let i = 0; i < 10; i++) {
  insert(i);
  console.log(arr, arr.length);
}
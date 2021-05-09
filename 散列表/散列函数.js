/*
* 思路
* 对字母去ascii码值相加再对散列表长度取模*/

const MAX = 9688;

function hash(str) {
  let hashValue = '';
  for (let i = 0; i < str.length; i++) {
    hashValue += str.charCodeAt(i) * Math.pow(26, i);
  }
  hashValue %= MAX;
  return parseInt(hashValue);
}


// test
console.log(hash('abcd'))
console.log(hash('abce'))
console.log(hash('bcde'))
console.log(hash('bcdef'))
console.log(hash('ggif'))

// 开平方根
/*思路
* 不断用数的平方去试，如果大了，就减小，否则就增大*/

function squareRoot(num, fix) {
  if (num === 0 || num === 1) return num;
  let low = 0, high = num;
  let mid = 1;
  while (Math.abs(mid * mid - num) > 0.000001) {
    mid = low + (high - low) / 2;
    let square = mid * mid;
    if (square === num) return mid;
    if (square > num) {
      high = mid
    } else {
      low = mid
    }
  }

  return mid;
}


function getDecimalPlaces(num) {
  num = num + ''
  if (num.indexOf('.') !== -1) {
    return num.split('.')[1].length;
  } else {
    return 0;
  }
}

function main(num) {
  return squareRoot(num, 0, num)
}

// test
console.log(main(6))

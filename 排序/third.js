function GetThirdIndex(a, from, to) {
  var t_array = new Array();
  // Use both 'from' and 'to' to determine the pivot candidates.
  var increment = 200 + ((to - from) & 15);
  var j = 0;
  from += 1;
  to -= 1;
  for (var i = from; i < to; i += increment) {
    t_array[j] = [i, a[i]];
    j++;
  }
  t_array.sort(function (a, b) {
    return comparefn(a[1], b[1]);
  });
  var third_index = t_array[t_array.length >> 1][0];
  return third_index;
}

let arr = []
for (let i = 0; i < 1500; i++) {
  arr.push(parseInt(Math.random() * 100))
}
console.log(GetThirdIndex(arr, 0, arr.length))

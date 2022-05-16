export function getArr(len) {
  return [...Array(len).keys()];
}

export function getArrSumElements(arr) {
  return arr.reduce((prevVal, currVal) => prevVal + currVal, 0);
}

export function getModifyArr(arr) {
  return arr.map((x) => x * 2);
}

export function getMinMax(arr) {
  const ans = {};

  ans.max = Math.max.apply(null, arr);
  ans.min = Math.min.apply(null, arr);

  return ans;
}

function main() {
  const arr = getArr(10);
  console.log(arr);

  const sum = getArrSumElements(arr);
  console.log(sum);

  const modArr = getModifyArr(arr);
  console.log(modArr);

  const minMax = getMinMax(arr);
  console.log(minMax.max);
  console.log(minMax.min);
}

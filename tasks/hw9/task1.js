export function isRectangular(arr) {
  const arrSides = arr.filter((num) => num > 0);
  if (arrSides.length < 3) {
    return false;
  }

  arrSides.sort((a, b) => a - b);

  const a = arrSides[0];
  const b = arrSides[1];
  const c = arrSides[2];

  const res = a * a + b * b === c * c;

  console.log(res);

  return res;
}

function main() {
  const a = 3;
  const b = 4;
  const c = 5;

  const arrSides = [a, b, c];

  isRectangular(arrSides);
}

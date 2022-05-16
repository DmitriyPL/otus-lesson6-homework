export function calcSum50to100() {
  let sum = 0;

  for (let i = 50; i <= 100; i += 1) {
    sum += i;
  }

  console.log(sum);
  return sum;
}

function main() {
  calcSum50to100();
}

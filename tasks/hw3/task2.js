export function multTableFor7() {
  const res = [];

  for (let i = 1; i <= 9; i += 1) {
    const str = `7 x ${i} = ${7 * i}`;
    res.push(str);
    console.log(str);
  }

  return res;
}

// eslint-disable-next-line no-unused-vars
function main() {
  multTableFor7();
}

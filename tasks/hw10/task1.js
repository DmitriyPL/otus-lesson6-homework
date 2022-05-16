export function isDate(str) {
  const regex1 = /\d{4}(-|\/| |.)\d{2}\1\d{2}/;

  const res = regex1.test(str);

  console.log(res);

  return res;
}

export function isEmail(str) {
  const regex1 = /[\da-z\.]+@[\da-z]+\.[a-z]+/;

  const res = regex1.test(str);

  console.log(res);

  return res;
}

function main() {
  const str1 = '2016-07-21';

  isDate(str1);

  const str2 = 'john@gmail.com';

  isEmail(str2);
}

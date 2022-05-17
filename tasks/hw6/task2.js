export function isWord(str) {
  const trimStr = str.trim();

  const arrWords = trimStr.split(" ");

  const res = !(arrWords.length > 1);

  console.log(res);

  return res;
}

// eslint-disable-next-line no-unused-vars
function main() {
  const str = prompt("Enter string");

  isWord(str);
}

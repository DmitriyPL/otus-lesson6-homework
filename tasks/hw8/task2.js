export function getMinuteOfThisDay(curTime) {
  const hr = curTime.getHours();
  const min = curTime.getMinutes();

  const res = hr * 60 + min;

  console.log(res);

  return res;
}

// eslint-disable-next-line no-unused-vars
function main() {
  const curTime = new Date();
  getMinuteOfThisDay(curTime);
}

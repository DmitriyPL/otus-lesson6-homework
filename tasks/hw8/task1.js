export function getParseDate(dateInUserFormat) {
  return dateInUserFormat.split(".");
}

export function getDayOfTheWeek(parseDate) {
  const date = new Date(parseDate[2], parseDate[1] - 1, parseDate[0]);

  const options = { weekday: "long" };

  const res = new Intl.DateTimeFormat("en-US", options).format(date);

  console.log(res);

  return res;
}

// eslint-disable-next-line no-unused-vars
function main() {
  const date = prompt("Enter date in format 'dd.mm.yyyy'");

  const parseDate = getParseDate(date);
  getDayOfTheWeek(parseDate);
}

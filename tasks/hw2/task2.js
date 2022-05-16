export function getMonthName(monthNum) {
  const dictMonth = {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь",
  };

  const monthName = dictMonth[monthNum];
  console.log(monthName);

  return monthName;
}

export function inputIsOk(input) {
  let isOk = true;
  const castInput = Number(input);

  if (isNaN(castInput)) {
    console.log("Enter a number between 1-12");
    isOk = false;
  } else if (castInput < 1 || castInput > 12) {
    console.log("Enter a number between 1-12");
    isOk = false;
  }

  return isOk;
}

function main() {
  const monthNum = prompt("Enter a month number");
  if (inputIsOk(monthNum)) {
    getMonthName(monthNum);
  }
}

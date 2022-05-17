export function saveList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

export function readList(key) {
  const items = JSON.parse(localStorage.getItem(key));
  return items === null ? [] : items;
}

/* eslint-disable no-param-reassign */
export function drawList(el, items) {
  el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;
}
/* eslint-disable no-param-reassign */

export function submitHandler(event, items) {
  const formEl = event.target;
  const input = formEl.querySelector("input");
  const { value } = input;
  input.value = "";

  items.push(value);

  if (items.length > 5) {
    items.shift();
  }
}

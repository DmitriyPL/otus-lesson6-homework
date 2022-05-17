import {
  readList,
  drawList,
  saveList,
  submitHandler,
} from "./modules/script.js";

const form = document.querySelector("form");
const items = readList("list");

const el = document.querySelector("#list");

drawList(el, items);

form.addEventListener("submit", (event) => {
  submitHandler(event, items);
  drawList(el, items);
  saveList("list", items);
});

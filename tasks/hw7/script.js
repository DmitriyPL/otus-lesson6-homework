module.exports = { saveList };
// , readList, drawList, submitHandler

function saveList(key, items) {
    localStorage.setItem(key, JSON.stringify(items));
}

function readList() {
    let items = JSON.parse(localStorage.getItem("list"));
    return items === null ? [] : items;
}

function drawList(el, items) {
    el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;
}

function submitHandler(event, items){
    const formEl = event.target;
    const input = formEl.querySelector("input");
    const value = input.value;
    input.value = "";

    items.push(value);

    if (items.length > 5){
        items.shift();
    }
}

const form = document.querySelector("form");
const listEl = document.querySelector("#list");
const items = readList();

drawList(listEl, items);

form.addEventListener("submit", (event) => {
    submitHandler(event, items)
    drawList(listEl, items);
    saveList("list", items);
});
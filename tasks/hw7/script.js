(async function () {

    function saveList(items) {
        localStorage.setItem("list", JSON.stringify(items));
    }

    async function readList() {
        let items = JSON.parse(localStorage.getItem("list"));
        return items === null ? [] : items;
    }

    function drawList(el, items) {
        el.innerHTML = `<ol>${items.map((el) => `<li>${el}</li>`).join("")}</ol>`;
    }

    const form = document.querySelector("form");
    const listEl = document.querySelector("#list");
    const items = await readList();

    drawList(listEl, items);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formEl = event.target;
        const input = formEl.querySelector("input");
        const value = input.value;
        input.value = "";

        items.push(value);

        if (items.length > 5){
            items.shift();
        }

        drawList(listEl, items);
        saveList(items);

    });
})();
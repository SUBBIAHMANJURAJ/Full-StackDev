const addButton = document.querySelector('#addBtn');
const input = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

addButton.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.classList.add('task');
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    input.value = '';
});
taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.closest("li").remove();
    }
});
taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
        const span = e.target.closest("li").querySelector("span");

        const newText = prompt("Edit your task:", span.innerText);

        if (newText !== null && newText.trim() !== "") {
            span.innerText = newText;
        }
    }
});
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addButton.click();
    }
});
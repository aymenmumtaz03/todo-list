const userInput = document.getElementById("input");
const btn = document.getElementById("todo-btn");
const list = document.getElementById("tasklists");
function createTask() {
    const text = userInput.value.trim();
    if (text === "") {
        alert
            (" PLEASE ENTER YOUR TASK!!! ");
    }
    else {
        const li = document.createElement("li");
        li.textContent = text; list.appendChild(li);
        userInput.value = "";
        const deletIcon = document.createElement("i");
        deletIcon.className = "fa-solid fa-trash";
        deletIcon.style.color = " #000000;";
        deletIcon.addEventListener("click", function () {
            list.removeChild(li);
        });
        li.appendChild(deletIcon);
        const editIcon = document.createElement("i");
        editIcon.className = "fa-solid fa-file-pen";
        editIcon.style.color = " #000000;";
        li.appendChild(editIcon);
        editIcon.addEventListener("click", function () {
            const newText = prompt("Edit task ", li.textContent);
            console.log(newText); if (newText !== null) {
                li.textContent = newText;
                li.appendChild(deletIcon);
                li.appendChild(editIcon);
            }
        });
    }
}
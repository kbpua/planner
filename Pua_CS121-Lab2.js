const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deleteButton = document.querySelector(".string-list-box button");

function addText() {
    if (inputBox.value === '') {
        alert("Please write something in the input box.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function deleteSelected() {
    document.querySelectorAll("li.checked").forEach(li => li.remove());
    saveData();
}

deleteButton.addEventListener("click", deleteSelected);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showList();
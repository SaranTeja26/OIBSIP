const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-button").addEventListener("click", addTask);

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});

// Load tasks from local storage when the page loads
window.addEventListener("load", function () {
    showTask();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

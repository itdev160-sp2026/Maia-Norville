
console.log("activity 4 interactive to-do list");
// part a element creation demonstration

console.log("element creation demonstration");

const demoParagraph = document.createElement("p");
const demoHeading = document.createElement("h2");

console.log("created paragraph element: ", demoParagraph);
console.log("created heading element: ", demoHeading);

demoParagraph.textContent = "This is a demo paragraph.";
demoParagraph.id = "demo-paragraph";
demoHeading.textContent = "This is a demo heading.";

console.log("paragraph after setting text and id: ", demoParagraph);
console.log("heading after setting text: ", demoHeading);

// part b element styling demonstration

console.log("element styling demonstration");

demoParagraph.style.backgroundColor = "lightpink";
demoParagraph.style.padding = "10px";
demoParagraph.style.border = "2px solid #ff69b4";

console.log("paragraph after styling: ", demoParagraph);

demoParagraph.classList.add("styled-paragraph");
demoParagraph.classList.add("additional-style");
console.log("paragraph after adding class: ", demoParagraph.classList);
console.log("has styled-paragraph class ", demoParagraph.classList.contains("styled-paragraph"));

demoParagraph.classList.remove("additional-style");
console.log("paragraph after removing class: ", demoParagraph.classList);

demoParagraph.classList.toggle("active");
console.log("paragraph after toggling active class: ", demoParagraph.classList);

demoHeading.style.marginTop = "20px";
demoHeading.style.textAlign = "center";
demoHeading.style.display = "block";

console.log("heading after styling: ", demoHeading);

// part c element appending demonstration

console.log("element appending demonstration");

const outputDiv = document.getElementById("output");
console.log ("output div before appending: ", outputDiv.children.length, "children");

outputDiv.appendChild(demoHeading);
outputDiv.appendChild(demoParagraph);

console.log ("output div after appending: ", outputDiv.children.length, "children");

// part d to-do list core functionality

console.log("to-do list core functionality demonstration");

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Input empty, please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;


    li.classList.add("task-item");
    li.classList.add("pending");
    li.onclick = toggleTask;


    document.getElementById("todo-list").appendChild(li);


    input.value = "";

    updateStats();
}

function toggleTask(event) {
    const li = event.target;

    if (li.classList.contains("done")) {
        li.classList.remove("done");
        li.classList.add("pending");
    } else {
        li.classList.remove("pending");
        li.classList.add("done");
    }

    updateStats();
}


function updateStats() {
    const list = document.getElementById("todo-list");
    const total = list.children.length;
    const completed = list.querySelectorAll(".done").length;
    const pending = total - completed;

    document.getElementById("totalCount").textContent = total;
    document.getElementById("completedCount").textContent = completed;
    document.getElementById("pendingCount").textContent = pending;
}


const taskButton = document.getElementById("taskButton");
if (taskButton) {
    taskButton.onclick = addTask;
} else {
    console.error('taskButton not found');
}


const taskInput = document.getElementById("taskInput");
if (taskInput) {
    taskInput.onkeydown = function(e) {
        if (e.key === "Enter") addTask();
    };
} else {
    console.error('taskInput not found');
}

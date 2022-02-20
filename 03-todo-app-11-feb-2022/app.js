taskList();

const FORM = document.getElementById("form");
const ADD_BTN = document.getElementById("addBtn");
const UPDATE_BTN = document.getElementById("updateBtn");
const DELETE_ALL_BTN = document.getElementById("deleteAllBtn");

FORM.addEventListener("submit", function (event) {
  event.preventDefault();
});

ADD_BTN.addEventListener("click", function () {
  const TASK = document.getElementById("task");
  let taskValue = TASK.value.trim();

  let storageTaskValue = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  taskValue != 0 ? storageTaskValue.push(taskValue) : invalidTask();

  localStorage.setItem("data", JSON.stringify(storageTaskValue));
  TASK.value = "";
  taskList();
});

// invalidTask
function invalidTask() {
  const INVALID_TASK = document.getElementById("invalidTask");
  INVALID_TASK.style.opacity = "1";
  INVALID_TASK.style.transition = "2s ease";

  setTimeout(() => {
    INVALID_TASK.style.opacity = "0";
  }, 2000);
}

// Task List
function taskList() {
  const TASKS = document.getElementById("tasks");

  let storageTaskValue = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  let tasks = "";

  storageTaskValue.forEach((element, index) => {
    tasks += ` <div class="cardBody col-md-3 my-2">
                <div class="card">
                  <div class="card-header bg-dark text-white">
                    <h5 class="card-title h3">Task ${index + 1}</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text">${element}</p>
                  </div>
                  <div class="card-footer">
                    <button type="button" class="btn btn-dark" style="width: 71.63px" onClick="editTask(${index})">
                      Edit
                    </button>
                    <button type="button" class="btn btn-dark mx-1" onClick="deteteTask(${index})">Delete</button>
                  </div>
                </div>
                </div>`;
  });

  TASKS.innerHTML = tasks;
}

//  Edit task
function editTask(index) {
  const UPDATE_TASK = document.getElementById("updateTask");
  let storageTaskValue = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  const TASK = document.getElementById("task");
  TASK.value = storageTaskValue[index];
  ADD_BTN.style.display = "none";
  UPDATE_BTN.style.display = "inline-block";
  UPDATE_TASK.value = index;
}

// Update Task
UPDATE_BTN.addEventListener("click", function () {
  const UPDATE_TASK = document.getElementById("updateTask").value;
  const TASK = document.getElementById("task");
  let taskValue = TASK.value.trim();
  let storageTaskValue = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  storageTaskValue[UPDATE_TASK] = taskValue;
  localStorage.setItem("data", JSON.stringify(storageTaskValue));
  ADD_BTN.style.display = "inline-block";
  UPDATE_BTN.style.display = "none";
  TASK.value = "";
  // location.reload();
  taskList();
});

// deteteTask
function deteteTask(index) {
  let storageTaskValue = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  storageTaskValue.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(storageTaskValue));
  taskList();
}

// delete all tasks
DELETE_ALL_BTN.addEventListener("click", function () {
  let storageTaskValue = localStorage.getItem("data")
    ? []
    : alert("You don't have any added tasks");

  localStorage.setItem("data", JSON.stringify(storageTaskValue));
  taskList();
});

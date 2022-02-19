taskList();

const FORM = document.getElementById("form");
const ADD_BTN = document.getElementById("addBtn");

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
                    <button type="button" class="btn btn-dark" style="width: 71.63px">
                      Edit
                    </button>
                    <button type="button" class="btn btn-dark mx-1">Delete</button>
                  </div>
                </div>
                </div>`;
  });

  TASKS.innerHTML = tasks;
}

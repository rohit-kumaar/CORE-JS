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
  console.log(storageTaskValue);
});

// invalidTask
function invalidTask() {
  const INVALID_TASK = document.getElementById("invalidTask");
  INVALID_TASK.style.opacity = "1";

  setTimeout(() => {
    INVALID_TASK.style.opacity = "0";
  }, 2000);
}

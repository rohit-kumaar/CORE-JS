const form = document.querySelector("form");
const inputText = document.querySelector("input[type=text]");
let ul = document.querySelector("ul");

console.log(ul);

function createLi() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = inputText.value;
  const div = document.createElement("div");
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  li.appendChild(span);
  li.appendChild(div);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);
  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let li = createLi();

  if (inputText.value === "") {
    alert("Please enter a text");
  } else {
    ul.appendChild(li);
  }
});

ul.addEventListener("click", (event) => {
  let button = event.target;
  let div = button.parentNode;
  let li = div.parentNode;
  let ul = li.parentNode;

  if (button.innerText === "Delete") {
    ul.removeChild(li);
  } else if (button.innerText === "Edit") {
    const span = li.firstElementChild;
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.innerText;
    li.insertBefore(input, span);
    li.removeChild(span);
    button.innerText = "save";
  } else if (button.textContent === "save") {
    const input = li.firstElementChild;
    const span = document.createElement("span");
    span.innerText = input.value;
    li.insertBefore(span, input);
    li.removeChild(input);
    button.innerText = "Edit";
  }
});

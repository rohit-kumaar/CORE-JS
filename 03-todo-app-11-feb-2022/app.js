// GRAB ADD BUTTON
let add = document.getElementById("add");
add.addEventListener("click", () => {
  let textArea = document.getElementById("textArea");
  let textAreaValue = textArea.value.trim();
  let getData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  console.log(localStorage.getItem("data"));

  if (textAreaValue.length > 0) {
    getData.push(textAreaValue);
  }

  localStorage.setItem("data", JSON.stringify(getData));
  textArea.value = "";
  displayInDom();
});

// DISPLAY IN DOM
let displayInDom = () => {
  let getData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  let html = "";
  getData.forEach((element, index) => {
    html += `<div class="cardBody col-md-3 my-2">
                <div class="card">
                    <div class="card-header bg-dark text-white">
                        <h5 class="card-title h3">Task ${index + 1}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${element}</p>
                    </div>
                    <div class="card-footer">
                        <button id="${index}" onclick="deteteTask(this.id)" type="button" class="btn btn-dark">Delete</button>

                    </div>
                </div>
            </div>`;
  });
  document.getElementById("notes").innerHTML = html;
};

// DELETE TASK IN DOM
let deteteTask = (index) => {
  let getData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  getData.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(getData));
  displayInDom();
};

// SEARCH BOX WORK
let search = document.getElementById("search");
search.addEventListener("input", () => {
  let searchValue = search.value.toLowerCase();

  let cardBody = document.getElementsByClassName("cardBody");
  Array.from(cardBody).forEach((element) => {
    let pTag = element.getElementsByTagName("p")[0].innerText;
    if (pTag.includes(searchValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// INVALIDTASK
// let invalidTask = document.getElementById("invalidTask");
// invalidTask.reset();

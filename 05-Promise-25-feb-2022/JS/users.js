const fetchUserBtn = document.getElementById("fetchUserBtn");
const tbody = document.getElementById("tbody");
fetchUserBtn.addEventListener("click", (e) => {
  usersData();
});

function usersData() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.forEach((element) => {
        html += ` <tr style="border-bottom: 1px solid #fff">
            <th scope="row">${element.id}</th>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
          </tr>`;
        tbody.innerHTML = html;
      });
    });
}

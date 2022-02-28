const fetchUserBtn = document.getElementById("fetchUserBtn");
const tbody = document.getElementById("tbody");
fetchUserBtn.addEventListener("click", (e) => {
  usersData().then((result) => {
    try {
      let html = "";
      result.forEach((element) => {
        html += ` <tr style="border-bottom: 1px solid #fff">
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                    <td>${element.website}</td>
                  </tr>`;
        tbody.innerHTML = html;
      });
    } catch (error) {
      document.write(`<h1>404 Some Error occurred From Server Side </h1>`);
    }
  });
});

async function usersData() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  let response = await fetch(URL);
  let data = await response.json();
  return data;
}

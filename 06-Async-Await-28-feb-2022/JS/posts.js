const fetchBtn = document.getElementById("fetchBtn");
const cards = document.getElementById("cards");
fetchBtn.addEventListener("click", () => {
  postsData().then((result) => {
    try {
      let html = "";
      result.forEach((element) => {
        const titleChar = element.title;
        const title = titleChar.charAt(0).toUpperCase() + titleChar.slice(1);
        const paragraph = element.body;

        html += ` <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${paragraph}</p>
                      </div>
                  </div>`;
        cards.innerHTML = html;
      });
    } catch (error) {
      document.write(`<h1>404 Some Error occurred From Server Side </h1>`);
    }
  });
});

async function postsData() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  let response = await fetch(URL);
  let data = await response.json();
  return data;
}

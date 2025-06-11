let icons = document.querySelectorAll(".left ul li");
let contant = document.querySelector(".contant");

function loadPage(file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      contant.innerHTML = data;
    })
    .catch(err => {
      contant.innerHTML = "<p>Error loading content.</p>";
      console.error(err);
    });
}

icons[0].addEventListener("click", () => loadPage("/pages/home.html"));
icons[1].addEventListener("click", () => loadPage("/pages/profile.html"));
icons[2].addEventListener("click", () => loadPage("/pages/passport.html"));
icons[3].addEventListener("click", () => loadPage("/pages/shop.html"));
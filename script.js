let icons = document.querySelectorAll(".left ul li");
let contant = document.querySelector(".contant");
let brightbtn = document.querySelector(".right");



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
brightbtn.childNodes[1].addEventListener("click",()=>{
  let data = document.body.classList.toggle("bright");
  if(data){
    brightbtn.childNodes[1].style.color = "black";
  }else{
    brightbtn.childNodes[1].style.color = "white";
  }

})

icons[0].addEventListener("click", () => loadPage("/pages/home.html"));
icons[1].addEventListener("click", () => loadPage("/pages/profile.html"));
icons[2].addEventListener("click", () => loadPage("/pages/passport.html"));
icons[3].addEventListener("click", () => loadPage("/pages/shop.html"));
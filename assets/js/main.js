const humMenu = document.querySelector(".humburger");
const NavMenu = document.querySelector(".header_list");
const close = document.querySelector(".close");

humMenu.addEventListener("click", function () {
  NavMenu.classList.add("active");
  close.style.display = "block";
  humMenu.style.display = "none";
});

close.addEventListener("click", function () {
  NavMenu.classList.remove("active");
  close.style.display = "none";
  humMenu.style.display = "block";
});

// show content

const btnReadmore = document.querySelectorAll(".read_more");
const desContent = document.querySelectorAll(".details_desc");

btnReadmore.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    desContent[index].classList.toggle("active");
  });
});

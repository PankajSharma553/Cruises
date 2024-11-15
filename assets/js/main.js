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

//  Accordion section
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeads = document.querySelectorAll(".accordion_head");

  accordionHeads.forEach(function (accordionHead) {
    const accordionAnswer = accordionHead.nextElementSibling;
    const topIcon = accordionHead.querySelector(".accordion_icon--top");
    const bottomIcon = accordionHead.querySelector(".accordion_icon--btm");

    accordionHead.addEventListener("click", function () {
      accordionHeads.forEach(function (otherAccordionHead) {
        const otherAccordionAnswer = otherAccordionHead.nextElementSibling;
        const otherTopIcon = otherAccordionHead.querySelector(
          ".accordion_icon--top"
        );
        const otherBottomIcon = otherAccordionHead.querySelector(
          ".accordion_icon--btm"
        );

        if (otherAccordionAnswer !== accordionAnswer) {
          otherAccordionAnswer.classList.remove("active");
          otherTopIcon.style.transform = "rotate(0deg)";
          otherBottomIcon.style.transform = "rotate(90deg)";
        }
      });

      accordionAnswer.classList.toggle("active");

      if (accordionAnswer.classList.contains("active")) {
        topIcon.style.transform = "rotate(45deg)";
        bottomIcon.style.transform = "rotate(-45deg)";
      } else {
        topIcon.style.transform = "rotate(0deg)";
        bottomIcon.style.transform = "rotate(90deg)";
      }
    });
  });
});

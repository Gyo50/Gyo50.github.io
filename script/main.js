/*--------------------------swiper-----------------------*/
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

var windowSize = window.innerWidth;

const menuToggle = document.querySelector(".menu-toggle");
const manuList = document.querySelector(".manuList");
const logoImg = document.querySelector(".logoimg");
const closeElement = document.querySelector(".close");

function toggle() {

  menuToggle.style.display = "none";
  manuList.style.display = "flex";
  logoImg.style.backgroundImage = 'url(/mainimg/logo2.png)';
  closeElement.style.display = "block";
  closeElement.style.cursor = "pointer";

}
closeElement.addEventListener("click", () => {
  menuToggle.style.display = "block";
  manuList.style.display = "none";
  logoImg.style.backgroundImage = 'url(/mainimg/logo.png)';
  closeElement.style.display = "none";
});
if(windowSize > 768){
  manuList.style.display = "flex !important";
}
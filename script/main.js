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


const toggle = document.querySelector('.menu-toggle');
const manuList = document.querySelector('.manuList');
toggle.addEventListener(onclick,function(){
    document.querySelector('.manuList').style.display = "block";
})
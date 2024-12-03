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
  
  // document.addEventListener('DOMContentLoaded', () => {
  //   const gameCard = document.querySelector('.game-card');
    
  //   gameCard.addEventListener('mouseenter', () => {
  //     cardInfront.style.transform = 'rotateY(180deg)';
  //     cardBack.style.transform = 'rotateY(0deg)';
  //     v4Img.style.visibility = 'hidden';
  //   });
    
  //   gameCard.addEventListener('mouseleave', () => {
  //     cardInfront.style.transform = 'rotateY(0deg)';
  //     cardBack.style.transform = 'rotateY(180deg)';
  //     v4Img.style.visibility = 'visible';
  //   });
  // });
  
  // const cardInfront = document.querySelector('.v4img');
  // const cardBack = document.querySelector('.v4-back');
  // const card = document.querySelector('.hoverdiv')
  // card.addEventListener('mouseenter', () => {
    //   cardInfront.style.transform = 'rotateY(180deg)';
    //   cardBack.style.transform = 'rotateY(0deg)';
    //   v4Img.style.visibility = 'hidden';
    // });
    
  // const v4Img = document.querySelector('.v4img');
  // const hoverv4 = document.querySelector('.hoverv4')
  // hoverv4.addEventListener('mouseenter', () => {
  //     document.querySelector('.v4-back').style.transform = 'rotateY(0deg)';
  //     v4Img.style.visibility = 'hidden';
  //   });
  //   hoverv4.addEventListener('mouseleave', () => {
  //     document.querySelector('.v4-back').style.transform = 'rotateY(180deg)';
  //       cardBack.style.transform = 'rotateY(0deg)';
  //       v4Img.style.visibility = 'visible';
  //     });
document.querySelector('.front').addEventListener('mouseenter',()=>{
  document.querySelector('.front').style.transform = 'rotateY(180deg)';
})



document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle("active");
      }
    });
  });
});


/*--------------AOS--------------*/
AOS.init();


/*----------------------nav---------------------------*/
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


/*--------------AOS--------------*/
AOS.init();
function updateAosDelays() {
  const introItems = document.querySelectorAll('.intro');
  
  // 특정 화면 조건 (예: 768px 이하)
  if (window.innerWidth <= 768) {
    introItems.forEach((item, index) => {
      const title = item.querySelector('h3').innerText; // 제목으로 판단
      
      if (title === '효율성') {
        item.querySelector('img').setAttribute('data-aos-delay', '0');
      } else if (title === '주인의식') {
        item.querySelector('img').setAttribute('data-aos-delay', '200');
      } else if (title === '커뮤니케이션') {
        item.querySelector('img').setAttribute('data-aos-delay', '0');
      }
    });
  }

  AOS.refresh(); // AOS 속성 갱신
}

// 초기 실행 및 화면 크기 변경 시 처리
updateAosDelays();
window.addEventListener('resize', updateAosDelays);
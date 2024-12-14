
/*----------------------nav---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
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
  

  if (window.innerWidth <= 768) {
    introItems.forEach((item, index) => {
      const title = item.querySelector('h3').innerText;
      
      if (title === '효율성') {
        item.querySelector('img').setAttribute('data-aos-delay', '0');
      } else if (title === '주인의식') {
        item.querySelector('img').setAttribute('data-aos-delay', '200');
      } else if (title === '커뮤니케이션') {
        item.querySelector('img').setAttribute('data-aos-delay', '0');
      }
    });
  }

  AOS.refresh();
}


updateAosDelays();
window.addEventListener('resize', updateAosDelays);

/*--------------------gsap----------------------*/

const frontLogo = document.querySelector('.logo .frontlogo');
const backLogo = document.querySelector('.logo .backlogo');
const textMainH2 = document.querySelector('.text-main h2');
const textMainH1 = document.querySelector('.text-main h1');
const textMainP = document.querySelector('.text-main p');


let frontLogoY = 0;
let backLogoY = 0;
let textMainH2Y = 0;
let textMainH1Y = 0;
let textMainPY = 0;

gsap.registerPlugin(ScrollTrigger);



gsap.from(document.querySelector('.content-main .logo'), {
  scrollTrigger: {
    trigger: document.querySelector('.content-main'), 
    start: "top top", 
    end: "bottom top",
    scrub: true, 

  },
  y: 100,
  scale:1,
  duration: 1,
});

gsap.to(document.querySelector('.text-main'), {
  scrollTrigger: {
    trigger: document.querySelector('.content-main'), 
    start: "top top", 
    end: "bottom top", 
    scrub: true, 

  },
  y: 100,
  duration: 1,
});

document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.start');
  const contentMain = document.querySelector('.content-main');
  const contentintro = document.querySelector('.content-intro')
  const news = document.querySelector('.news')
  const recruit = document.querySelector('.recruit')
  const footer = document.querySelector('footer')
  const game = document.querySelector('.content-game')
  const videocontainer = document.querySelector('.video-container')

  video.addEventListener('ended', function () {
      video.style.opacity = 0;

      setTimeout(() => {
        videocontainer.style.display = 'none';
          video.style.display = 'none';
          contentMain.classList.add('visible');
          contentintro.classList.add('visible');
          news.classList.add('visible');
          recruit.classList.add('visible');
          footer.classList.add('visible');
          game.classList.add('visible');
      }, 1000);
  });
});

document.querySelector('.overlay-logo').addEventListener('animationend', function() {
  this.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
  const frontLogo = document.querySelector('.content-main .logo .frontlogo');
  const backLogo = document.querySelector('.content-main .logo .backlogo');

  
  setTimeout(() => {
      frontLogo.classList.add('active');
      backLogo.classList.add('active');
  }, 10000);
});
document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.start');

 
  video.addEventListener('play', function () {
      document.body.style.overflow = 'hidden';
  });

 
  video.addEventListener('ended', function () {
      document.body.style.overflow = '';
  });
});


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
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".logo .frontlogo", {
//   y: 50,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top bottom", 
//     end: "bottom top",
//     scrub: 1,
//     markers: false,
//   }
// });

// gsap.to(".logo .backlogo", {
//   y: 50,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: 1, 
//     markers: false,
//   }
// });

// gsap.to(".text-main h2", {
//   y: -50,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: 1,
//     markers: false,
//   }
// });

// gsap.to(".text-main h1", {
//   y: -50,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".content-main",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: 1,
//     markers: false,
//   }
// });

// gsap.to(".text-main p", {
//   y: -50, 
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".content-main", 
//     end: "bottom top", 
//     scrub: 1, 
//     markers: false,
//   }
// });


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


// function animate() {
//     frontLogoY -= 0.2;
//     backLogoY -= 0.2;


//     textMainH2Y += 0.2;
//     textMainH1Y += 0.2;
//     textMainPY += 0.2;

//     frontLogo.style.transform = `translateY(${frontLogoY}px)`;
//     backLogo.style.transform = `translateY(${backLogoY}px)`;
//     textMainH2.style.transform = `translateY(${textMainH2Y}px)`;
//     textMainH1.style.transform = `translateY(${textMainH1Y}px)`;
//     textMainP.style.transform = `translateY(${textMainPY}px)`;

//     if (frontLogoY < -50) frontLogoY = 0;
//     if (backLogoY < -50) backLogoY = 0;
//     if (textMainH2Y > 50) textMainH2Y = 0;
//     if (textMainH1Y > 50) textMainH1Y = 0;
//     if (textMainPY > 50) textMainPY = 0;

//     requestAnimationFrame(animate);
// }


// animate();

gsap.registerPlugin(ScrollTrigger);



gsap.from(document.querySelector('.content-main .logo'), {
  scrollTrigger: {
    trigger: document.querySelector('.content-main'), 
    start: "top top", 
    end: "bottom top", 
    scrub: true, 
    // markers: true,
  },
  y: 100,
  duration: 1,
});

gsap.to(document.querySelector('.text-main'), {
  scrollTrigger: {
    trigger: document.querySelector('.content-main'), 
    start: "top top", 
    end: "bottom top", 
    scrub: true, 
    // markers: true,
  },
  y: 100,
  duration: 1,
});
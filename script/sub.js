const support = document.querySelectorAll('.support-img');
const health = document.querySelectorAll('.health-img');
const growth = document.querySelectorAll('.growth-img');


document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".nav-item");
    const point = document.querySelector('ul li:nth-child(5) a')

    navItems.forEach((item) => {
        item.addEventListener("click", function () {
            if (window.innerWidth <= 768) {
                this.classList.toggle("active");
            }
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    rewind: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        type: "fraction",
    },
    on: {
        init: function () {
            updateProgress(this);
        },
        slideChange: function () {
            updateProgress(this);
        },
    },
});

function updateProgress(swiperInstance) {
    const currentSlide = swiperInstance.realIndex + 1; // 현재 슬라이드 (0부터 시작하므로 +1)
    const totalSlides = swiperInstance.slides.length; // 전체 슬라이드 수

    // Fraction 업데이트
    document.getElementById("current-slide").textContent = currentSlide;
    document.getElementById("total-slides").textContent = totalSlides;

    // Progressbar 업데이트
    const progressPercentage = (currentSlide / totalSlides) * 100;
    document.querySelector(".progressbar").style.width = `${progressPercentage}%`;
}

function updateAosDelays() {
    if (window.innerWidth <= 768) {
        support.forEach((item, index) => {

            const title = item.querySelector('p').innerText;
            if (title === '복지포인트') {
                item.querySelector('img').setAttribute('data-aos-delay', '0');
            } else if (title === '명절선물') {
                item.querySelector('img').setAttribute('data-aos-delay', '200');
            } else if (title === '중식 및 야근석식비 지원') {
                item.querySelector('img').setAttribute('data-aos-delay', '0');
            }
        });

        health.forEach((item, index) => {
            const title = item.querySelector('p').innerText;
            if (title === '휴게실') {
                item.querySelector('img').setAttribute('data-aos-delay', '0');
            } else if (title === '리프레시 휴가') {
                item.querySelector('img').setAttribute('data-aos-delay', '200');
            } else if (title === '콘도') {
                item.querySelector('img').setAttribute('data-aos-delay', '0');
            }
        });
        growth.forEach((item, index) => {
            const title = item.querySelector('p').innerText;
            if (title === '사내 동호회') {
                item.querySelector('img').setAttribute('data-aos-delay', '0');
            }
        });
    }

    AOS.refresh();
}
AOS.init();

updateAosDelays();
window.addEventListener('resize', updateAosDelays);

document.addEventListener("DOMContentLoaded", function () {
    const overlayup = document.querySelector(".overlay-up"); 
    const overlaydown = document.querySelector(".overlay-down"); 
    overlayup.classList.add("animate");
    overlaydown.classList.add("animate");
});















// // 요소 가져오기
// const nextButton = document.querySelector('.swiper-button-next');
// const prevButton = document.querySelector('.swiper-button-prev');
// const currentNumber = document.querySelector('.swiper-bar p');

// // 초기 값 설정
// let currentValue = 1;
// const maxValue = 3;

// // 숫자 업데이트 함수
// function updateNumber() {
//     // 값이 10 이하일 때 앞에 '0' 붙이기
//     currentNumber.textContent = currentValue < 10 ? `0${currentValue}` : `${currentValue}`;
// }

// // Next 버튼 클릭 이벤트
// nextButton.addEventListener('click', () => {
//     currentValue++;
//     if (currentValue > maxValue) {
//         currentValue = 1; // 03에서 다시 01로 순환
//     }
//     updateNumber();
// });

// // Prev 버튼 클릭 이벤트
// prevButton.addEventListener('click', () => {
//     currentValue--;
//     if (currentValue < 1) {
//         currentValue = maxValue; // 01에서 03으로 순환
//     }
//     updateNumber();
// });

// // 초기 숫자 설정
// updateNumber();
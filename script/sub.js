const support = document.querySelectorAll('.support-img');
const health = document.querySelectorAll('.health-img');
const growth = document.querySelectorAll('.growth-img');

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

var swiper = new Swiper(".mySwiper", {
    rewind: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function updateAosDelays() {
    if (window.innerWidth <= 768) {
        support.forEach((item, index) => {

            const title = item.querySelector('p').innerText; // 제목으로 판단
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
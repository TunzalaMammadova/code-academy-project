"use strict"
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let academyList = document.querySelector(".academy");
let educationList = document.querySelector(".education");
let academyPage = document.querySelector(".academy-page");
let educationPage = document.querySelector(".education-page");

academyList.addEventListener("mouseover", function () {
    academyPage.classList.remove("d-none");
})

academyList.addEventListener("mouseout", function () {
    academyPage.classList.add("d-none");
})

educationList.addEventListener("mouseover", function () {
    educationPage.classList.remove("d-none");
})

educationList.addEventListener("mouseout", function () {
    educationPage.classList.add("d-none");
})
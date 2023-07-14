var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

// мобильный слайдер

// var swiper__mobile = new Swiper__mobile(".mySwiper__mobile", {
//     spaceBetween: 30,
//     navigation: {
//         nextEl: ".swiper-button-next__mobile",
//         prevEl: ".swiper-button-prev__mobile",
//     },
//     pagination: {
//         el: ".swiper-pagination__mobile",
//     },
//     mousewheel: true,
//     keyboard: true,
// });

AOS.init();
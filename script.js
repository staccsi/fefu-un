var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade:'true',
    gragCursor: 'true',
    pagination:{
        el: ".swiper-pagination",
        clicable:true,
        dynamicBullets: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        } ,
        950: {
            slidesPerView: 3,
        },
        1130: {
            slidesPerView: 4,
        },
    },
});

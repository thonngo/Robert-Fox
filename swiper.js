const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".swiper-slide.storytelling");
const slideCount = slides.length;
fraction.textContent = `1 / ${slideCount}`;

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    slidesPerView: "1", //количество выводимых слайдов, по умолчанию стоит 1
    loop: true, 
    // зацикливание картинок по кругу, true - будет повтоорять, false - по умолчанию не будет повторять

    // If we need pagination
    pagination: {
     el: ".swiper-pagination", 
     clickable:true,
    },

    // pagination: {
    // el: ".swiper-fraction", 
    // type: 'fraction',
    // },
    // renderFraction: function (".swiper-slide", ".swiper") {
    //     return '<span class="' + '.swiper-slide' + '"></span>' +' of ' + '<span class="' + '.swiper' + '"></span>';
    // },

    // Navigation arrows
    navigation: {
        nextEl: ".button_next",
        prevEl: ".button_prev"
    },

    on: {
        slideChange: () => {
            fraction.textContent = `${swiper.realIndex + 1} / ${slideCount}`;
        }
    },
    // And if we need scrollbar
    scrollbar: {
    el: ".swiper-scrollbar", 
    },

    spaceBetween: 24,
  });
$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 2561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-staff").slick({
    speed: 300,
    dots: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2561,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
        },
      },
    ],
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const questionBtns = document.querySelectorAll(".question");
const hidenText = document.querySelectorAll(".hiden-text");
const plusBtns = document.querySelectorAll(".plus");

questionBtns.forEach((item, index) => {
  item.addEventListener("click", function () {
    hidenText[index].classList.toggle("hiden");
    plusBtns[index].classList.toggle("hiden");
    item.classList.toggle("question-active");
  });
});

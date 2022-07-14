var swiper = new Swiper(".galeri-slider", {
    loop: true, 
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
    },
    autoplay: {
      delay: 2250,
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true, 
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        825: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
    },
    autoplay: {
      delay: 3000,
    },
});

// *************** PopUp Window ***************
const popupWindow = document.getElementById("popup-window");
setTimeout(function(){
  popupWindow.style.display = "block";
  window.open("https://www.jasaperancangsitusweb.epizy.com/");
}, 10000);
const tutup = document.querySelector('.tutup').addEventListener('click', function(){
  popupWindow.style.display = "none";
});
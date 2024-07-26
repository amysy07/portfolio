const imgs = document.querySelectorAll("section img")

scrolling()
window.onscroll = scrolling

function scrolling() {
  const viewportHeight = window.innerHeight
  imgs.forEach(img => {
    if (img.getBoundingClientRect().top < viewportHeight) {
      img.style.animationPlayState = "running"
    }
  })
}

// SWIPER

var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
    
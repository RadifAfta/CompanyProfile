document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".slider-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".slider-container img");
        if (index < 0) {
            slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
            slideIndex = 0;
        }
        sliderContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", function () {
        showSlide(slideIndex - 1);
    });

    nextBtn.addEventListener("click", function () {
        showSlide(slideIndex + 1);
    });
});

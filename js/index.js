// JavaScript to control the slideshow
const showcases = document.querySelectorAll(".showcase");

showcases.forEach((showcase) => {
    let currentSlide = 0;
    const slides = showcase.querySelectorAll(".slide");
    const totalSlides = slides.length;

    showcase.querySelector(".arrow.left").addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active");
    });

    showcase.querySelector(".arrow.right").addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add("active");
    });

    // Initialize the first slide
    slides[currentSlide].classList.add("active");
});
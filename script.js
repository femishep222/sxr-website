document.addEventListener("DOMContentLoaded", () => {
    // Slideshow logic
    const slides = ["assets/classroom1.JPEG", "assets/classroom2.jpeg", "assets/classroom3.jpeg", "assets/student1.jpeg"];
    const slideElement = document.getElementById("slide");
    let currentSlide = 0;

    function changeSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        slideElement.src = slides[currentSlide];
    }

    // Change the slide every 3 seconds
    setInterval(changeSlide, 3000);
});

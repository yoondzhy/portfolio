// --- 1. Project Slider Logic ---
let currentSlide = 0;
const slides = document.querySelectorAll('.project-slide');
const totalSlides = slides.length;
const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

/**
 * Updates the position of the slider wrapper to show the current slide.
 */
function updateSlider() {
    // Calculate the percentage translation needed (e.g., 0%, -100%, -200%)
    const offset = -currentSlide * 100; 
    sliderWrapper.style.transform = `translateX(${offset}%)`;
    
    // Disable/enable buttons based on current slide position
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

/**
 * Moves to the next slide.
 */
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
    }
}

/**
 * Moves to the previous slide.
 */
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
}

// Add event listeners for the navigation buttons
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

// Initialize the slider position on page load
updateSlider(); 


// --- 2. About Me Overlay Logic ---
const aboutOverlay = document.getElementById('about-overlay');

/**
 * Opens the About Me overlay (expands width from 0 to 100%).
 */
window.openAbout = function() {
    if (aboutOverlay) {
        aboutOverlay.style.width = "100%";
    }
}

/**
 * Closes the About Me overlay (shrinks width back to 0).
 */
window.closeAbout = function() {
    if (aboutOverlay) {
        aboutOverlay.style.width = "0%";
    }
}

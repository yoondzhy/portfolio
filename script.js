// --- 1. Centralized Project Data Array ---
const projects = [
    {
        title: "Project 1: The Climate Data Dashboard",
        course: "Course: Data Visualization",
        description: "This project involved designing an interactive dashboard to communicate complex local climate trends to policymakers...",
        imageSrc: "p1.png", // <--- SIMPLIFIED IMAGE NAME
        imageAlt: "Climate Dashboard Mockup"
    },
    {
        title: "Project 2: Process Flow Infographic",
        course: "Course: Information Hierarchy",
        description: "A detailed infographic created to simplify the onboarding process for new employees...",
        imageSrc: "p2.jpg", // <--- SIMPLIFIED IMAGE NAME
        imageAlt: "Process Flow Infographic"
    },
    {
        title: "Project 3: Typographic Systems",
        course: "Course: Visual Communication",
        description: "Exploration of how typographic scale, weight, and color can establish hierarchy...",
        imageSrc: "p3.png", // <--- SIMPLIFIED IMAGE NAME
        imageAlt: "Typographic System Mockup"
    }
    // ADD NEW PROJECTS HERE. You only need to edit this list!
];


// --- 2. Function to Render Projects from Data ---
function renderProjects() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (!sliderWrapper) return;

    sliderWrapper.innerHTML = projects.map((project, index) => `
        <div class="project-slide" data-index="${index}">
            <div class="project-content">
                <div class="project-layout">
                    <div class="project-visual">
                        <img src="${project.imageSrc}" alt="${project.imageAlt}">
                    </div>
                    <div class="project-text">
                        <h1>${project.title}</h1>
                        <p class="project-course">${project.course}</p>
                        <p class="project-description">${project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join(''); // .join('') removes the commas between array elements
}

// --- 3. Project Slider Logic ---
let currentSlide = 0;
let totalSlides; // Will be set after rendering
const sliderWrapper = document.querySelector('.slider-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

/**
 * Updates the position of the slider wrapper to show the current slide.
 */
function updateSlider() {
    // Only proceed if totalSlides is correctly set
    if (!totalSlides) return; 
    
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

// --- 4. About Me Overlay Logic (Keep as before) ---
window.openAbout = function() {
    const aboutOverlay = document.getElementById('about-overlay');
    if (aboutOverlay) {
        aboutOverlay.style.width = "100%";
    }
}
window.closeAbout = function() {
    const aboutOverlay = document.getElementById('about-overlay');
    if (aboutOverlay) {
        aboutOverlay.style.width = "0%";
    }
}


// --- 5. Initialization on Document Load ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render all projects from the data array
    renderProjects(); 

    // 2. Set the total number of slides
    totalSlides = projects.length; 
    
    // 3. Add event listeners now that the buttons exist
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // 4. Set initial slider position
    updateSlider(); 
});

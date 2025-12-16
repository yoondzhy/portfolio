// --- 1. Centralized Project Data Array ---
// ВНИМАНИЕ: Убедитесь, что файлы изображений (p1.png, p2.jpg, p3.png) 
// находятся в той же директории, что и index.html
const projects = [
    {
        title: "Project 1: The Climate Data Dashboard",
        course: "Course: Data Visualization",
        description: "This project involved designing an interactive dashboard to communicate complex local climate trends to policymakers. Key features include temporal filtering and comparison views. The goal was to transform raw data into actionable insights.",
        imageSrc: "p1.png", 
        imageAlt: "Climate Dashboard Mockup"
    },
    {
        title: "Project 2: Process Flow Infographic",
        course: "Course: Information Hierarchy",
        description: "A detailed infographic created to simplify the onboarding process for new employees. Using a combination of illustration and clear directional cues, the complexity of the workflow was reduced by 40% based on initial testing.",
        imageSrc: "p2.jpg", 
        imageAlt: "Process Flow Infographic"
    },
    {
        title: "Project 3: Typographic Systems",
        course: "Course: Visual Communication",
        description: "Exploration of how typographic scale, weight, and color can establish hierarchy and guide the reader's eye in long-form reports. The final design resulted in a significant improvement in readability scores.",
        imageSrc: "p3.png", 
        imageAlt: "Typographic System Mockup"
    }
];


// --- 2. Function to Render Projects with Left/Right Layout ---
function renderProjects() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (!sliderWrapper) return;

    // Генерируем HTML для каждого проекта
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
    `).join(''); 
}

// --- 3. Project Slider Logic Variables and Functions ---
let currentSlide = 0;
let totalSlides; 
let sliderWrapper; 
let prevBtn;       
let nextBtn;       

function updateSlider() {
    if (!totalSlides || !sliderWrapper) return; 
    const offset = -currentSlide * 100; 
    sliderWrapper.style.transform = `translateX(${offset}%)`;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
}

// --- 4. About Me Overlay Logic ---
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
    // 1. Присваиваем переменным DOM-элементы (теперь, когда они загружены)
    sliderWrapper = document.querySelector('.slider-wrapper');
    prevBtn = document.querySelector('.prev-btn');
    nextBtn = document.querySelector('.next-btn');
    
    if (!sliderWrapper || !prevBtn || !nextBtn) {
        console.error("Slider elements not found. Check HTML structure.");
        return;
    }

    // 2. Рендерим контент проектов
    renderProjects(); 
    totalSlides = projects.length; 
    
    // 3. Добавляем обработчики событий
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }
    
    // 4. Устанавливаем начальную позицию
    updateSlider(); 
});

// script.js
class PortfolioSlider {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = 3;
        this.slider = document.getElementById('slider');
        this.slides = document.querySelectorAll('.slide');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.dotsContainer = document.getElementById('dots');
        this.aboutPage = document.getElementById('aboutPage');
        this.backBtn = document.getElementById('backBtn');
        
        this.init();
    }
    
    init() {
        this.createDots();
        this.bindEvents();
        this.updateSlider();
    }
    
    createDots() {
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
        this.dots = document.querySelectorAll('.dot');
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        // Touch/swipe support
        let startX = 0;
        let currentX = 0;
        
        this.slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.slider.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
        });
        
        this.slider.addEventListener('touchend', (e) => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) this.nextSlide();
                else this.prevSlide();
            }
        });
        
        // About page toggle (you can add a button to trigger this)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'a' || e.key === 'A') this.toggleAbout();
        });
        
        this.backBtn.addEventListener('click', () => this.toggleAbout());
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateSlider();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateSlider();
    }
    
    updateSlider() {
        // Update slides
        this.slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev');
            
            if (index === this.currentSlide) {
                slide.classList.add('active');
            } else if (index === (this.currentSlide - 1 + this.totalSlides) % this.totalSlides) {
                slide.classList.add('prev');
            }
        });
        
        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    toggleAbout() {
        this.aboutPage.classList.toggle('active');
        document.body.style.overflow = this.aboutPage.classList.contains('active') ? 'hidden' : '';
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioSlider();
});

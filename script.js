document.addEventListener('DOMContentLoaded', () => {
    // 1. Project Card Click (Toggle Explanation)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Toggle the 'expanded' class on the clicked card
            card.classList.toggle('expanded');
        });
    });


    // 2. Course Filter Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectGrid = document.querySelector('.project-grid');

    if (filterButtons.length > 0 && projectGrid) {
        filterButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const selectedCourse = event.target.getAttribute('data-course');
                
                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                event.target.classList.add('active');

                // Filter projects
                const allProjects = projectGrid.querySelectorAll('.project-card');
                allProjects.forEach(project => {
                    const projectCourse = project.getAttribute('data-course');
                    
                    if (selectedCourse === 'all' || projectCourse === selectedCourse) {
                        project.style.display = 'block'; // Show project
                    } else {
                        project.style.display = 'none';  // Hide project
                    }
                });
            });
        });
    }
});
// Main JavaScript file using ES6 features

class Website {
    constructor() {
        this.init();
    }

    init() {
        this.setupActiveNavigation();
    }

    setupActiveNavigation() {
        // Get current page URL
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Find all navigation links
        const navLinks = document.querySelectorAll('nav a');
        
        // Loop through links and add active class to current page
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || 
                (currentPage === 'index.html' && linkPage === '#' && link.textContent === 'Home') ||
                (currentPage === 'about.html' && linkPage === '#' && link.textContent === 'About') ||
                (currentPage === 'contact.html' && linkPage === '#' && link.textContent === 'Contact')) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new Website();
});

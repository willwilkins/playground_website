// Main JavaScript file using ES6 features

// Example of a class
class Website {
    constructor() {
        this.init();
    }

    init() {
        // Add event listeners or initialize components here
        console.log('Website initialized!');
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new Website();
});

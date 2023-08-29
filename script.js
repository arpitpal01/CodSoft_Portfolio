// Add any interactivity or enhancements here
// For example, you can use JavaScript to create smooth scrolling effects when clicking on navigation links

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });
    
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    }
});

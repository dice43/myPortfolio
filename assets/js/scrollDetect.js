document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".about-item");
    const projects = document.querySelectorAll(".project-card");
    // Function to check if the element is in the viewport
    function checkVisibility() {
        console.log("Scroll event triggered"); // Check if the scroll event is triggered
        items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            console.log(rect.top, rect.bottom); // Log the positions of the elements

            // If the element is in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                if (!item.classList.contains("animate__fadeInLeft")) {
                    item.classList.remove("animate__fadeOutLeft");
                    item.classList.add("animate__animated", "animate__fadeInLeft");
                }
            }
            else {
                if (item.classList.contains("animate__fadeInLeft")){
                    item.classList.add("animate__fadeOutLeft");
                    item.classList.remove("animate__fadeInLeft");
                }
            }
        });

        
        // Check visibility for project cards and apply zoomIn animation
        projects.forEach((card) => {
            const rect = card.getBoundingClientRect();
            
            if (rect.top + rect.height / 2 <= window.innerHeight && rect.bottom >= 0) {
                // Apply zoomIn animation for project cards when in view
                if (!card.classList.contains("animate__zoomIn")) {
                    card.classList.remove("animate__zoomOut"); // Reset if scrolled away
                    card.classList.add("animate__animated", "animate__zoomIn");
                }
            } else {
                // Reset animation if the card goes out of view
                if (rect.top > window.innerHeight){
                    if (card.classList.contains("animate__zoomIn")) 
                    {
                        card.classList.remove("animate__zoomIn");
                        card.classList.add("animate__zoomOut");
                    }
                }
            }
        });

        // Reset the scrolling flag after a delay
        setTimeout(() => {
            isScrolling = false;
        }, 100); // Adjust timeout duration to control scroll event frequency

    }

    
    // Listen for scroll events to check visibility
    window.addEventListener("scroll", checkVisibility);

    // Run checkVisibility once on page load to trigger any elements already in view
    checkVisibility();
});

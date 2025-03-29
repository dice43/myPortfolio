document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".projects-container");
    const projects = document.querySelectorAll(".project-card");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    const visibleCards = 3; // Show 3 cards at a time
    const totalCards = projects.length;
    const cardWidth = projects[0].offsetWidth + 20; // Width of each card including gap

    function updateCarousel() {
        container.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    }

    nextButton.addEventListener("click", function() {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first set
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - visibleCards; // Loop to last set
        }
        updateCarousel();
    });

    // Initialize
    updateCarousel();
});

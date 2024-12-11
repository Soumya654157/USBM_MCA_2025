// script.js

// Get all row posters
const rowPosters = document.querySelectorAll(".row__poster");

// Add hover event to each poster
rowPosters.forEach((poster) => {
    poster.addEventListener("mouseover", () => {
        // Set a title or show some additional movie info
        poster.style.transform = "scale(1.08)";
    });

    poster.addEventListener("mouseout", () => {
        // Reset the hover effect
        poster.style.transform = "scale(1)";
    });
});

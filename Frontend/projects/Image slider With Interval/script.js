const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg' 
];

let currentIndex = 0;
const slideImage = document.getElementById('slideImage');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    slideImage.src = images[currentIndex];
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

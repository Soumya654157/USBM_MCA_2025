const showNotificationButton = document.getElementById('showNotification');
const notification = document.getElementById('notification');

showNotificationButton.addEventListener('click', showNotification);

function showNotification() {
    notification.classList.remove('hidden'); // Show the notification
    notification.style.opacity = '1'; 

    setTimeout(() => {
        notification.style.opacity = '0'; // Fade out the notification
        setTimeout(() => {
            notification.classList.add('hidden'); 
        }, 500); 
    }, 5000); 
}

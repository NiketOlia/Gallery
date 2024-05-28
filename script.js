// JavaScript для слайдера
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

showSlide(currentSlide);

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

// JavaScript для модальных окон
const newsButtons = document.querySelectorAll('.news-button');
const modals = document.querySelectorAll('.modal');
const closeModals = document.querySelectorAll('.close-modal');



newsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modalId;
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

closeModals.forEach(close => {
    close.addEventListener('click', () => {
        const modal = close.parentElement.parentElement;
        modal.style.display = 'none';
    });
    window.onclick = function(event) {
        const modal = close.parentElement.parentElement;
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});


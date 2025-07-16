document.addEventListener('DOMContentLoaded', function() {
        const track = document.querySelector('.gallery-nabor');
        const slides = Array.from(document.querySelectorAll('.gallery-slide'));
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');
        
        const slideWidth = slides[0].getBoundingClientRect().width + 20; 
        let currentPosition = 0;
        
        function updateGallery() {
            track.style.transform = `translateX(-${currentPosition}px)`;
            
            prevBtn.style.display = currentPosition === 0 ? 'none' : 'block';
            nextBtn.style.display = currentPosition >= (slides.length - 3) * slideWidth ? 'none' : 'block';
        }
        
        nextBtn.addEventListener('click', function() {
            const maxPosition = (slides.length - 3) * slideWidth;
            currentPosition = Math.min(currentPosition + slideWidth, maxPosition);
            updateGallery();
        });
        
        prevBtn.addEventListener('click', function() {
            currentPosition = Math.max(currentPosition - slideWidth, 0);
            updateGallery();
        });
        
        // Инициализация
        updateGallery();
    });
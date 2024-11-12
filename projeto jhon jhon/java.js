// script.js

document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate');
    
    const observerOptions = {
        root: null,  // Observa as interações com a viewport
        threshold: 0.1,  // Ativa a animação quando 10% do elemento entra na tela
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
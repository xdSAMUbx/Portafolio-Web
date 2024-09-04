let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    window.requestAnimationFrame(function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll hacia abajo, ocultamos el header
            header.style.top = '-4rem';
        } else {
            // Scroll hacia arriba, mostramos el header
            header.style.top = '0rem';
        }
        // Actualizamos lastScrollTop evitando valores negativos
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});

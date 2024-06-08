function descargarCV() {
    window.location.href = 'imagenes/cv.pdf';
}

document.querySelectorAll('section#contacts a img').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.2s';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

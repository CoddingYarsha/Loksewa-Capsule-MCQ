document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-section');

    sections.forEach(section => {
        section.addEventListener('click', function() {
            const content = section.querySelector('.content');
            content.classList.toggle('visible');
        });
    });
});
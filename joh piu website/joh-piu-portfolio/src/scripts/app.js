document.addEventListener('DOMContentLoaded', function() {
    const galleryButton = document.getElementById('gallery-button');
    const aboutMeButton = document.getElementById('about-me-button');
    const contactButton = document.getElementById('contact-button');

    const gallerySection = document.getElementById('gallery-section');
    const aboutMeSection = document.getElementById('about-me-section');
    const contactSection = document.getElementById('contact-section');

    function hideAllSections() {
        gallerySection.style.display = 'none';
        aboutMeSection.style.display = 'none';
        contactSection.style.display = 'none';
    }

    galleryButton.addEventListener('click', function() {
        hideAllSections();
        gallerySection.style.display = 'block';
    });

    aboutMeButton.addEventListener('click', function() {
        hideAllSections();
        aboutMeSection.style.display = 'block';
    });

    contactButton.addEventListener('click', function() {
        hideAllSections();
        contactSection.style.display = 'block';
    });
});
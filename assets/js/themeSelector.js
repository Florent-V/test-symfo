
console.log('Hello Stimulus! Edit me in assets/controllers/hello_controller.js');
document.addEventListener('DOMContentLoaded', function () {
    const themeLinks = document.querySelectorAll('[data-theme]');
    console.log('coucou', themeLinks);
    themeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const theme = this.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
        });
    });
});


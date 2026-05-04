const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', function() {
    navList.classList.toggle('nav__list--active');
    navToggle.classList.toggle('nav__toggle--active');
});

const navLinks = document.querySelectorAll('.nav__link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        navList.classList.remove('nav__list--active');
        navToggle.classList.remove('nav__toggle--active');
    });
}

const header = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});

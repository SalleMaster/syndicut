const navbarMenuToggle = document.querySelector('.navbar-menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');
const navbarBrand = document.querySelector('.navbar-brand');
const html = document.querySelector('html');

const toggleNavbar = () => {
  navbarMenuToggle.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  navbarBrand.classList.toggle('active');
  html.classList.toggle('nav-active');
};

navbarMenuToggle.addEventListener('click', toggleNavbar);

// Fade Out Animation
const navbarLinkItems = document.querySelectorAll('.navbar-link-item');
const main = document.querySelector('main');

const fadeOut = () => {
  main.classList.add('fade-out');
};

navbarLinkItems.forEach((link) => {
  link.addEventListener('click', fadeOut);
});

navbarBrand.addEventListener('click', fadeOut);

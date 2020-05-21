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

const navbarMenuToggle = document.querySelector('.navbar-menu-toggle');
const navbarLinks = document.querySelector('.navbar-links');
const navbarBrand = document.querySelector('.navbar-brand');

const toggleNavbar = () => {
  navbarMenuToggle.classList.toggle('active');
  navbarLinks.classList.toggle('active');
  navbarBrand.classList.toggle('active');
};

navbarMenuToggle.addEventListener('click', toggleNavbar);

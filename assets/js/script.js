// Select the burger menu and nav-links
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

// Add click event to toggle the menu
burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

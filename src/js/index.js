const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', showMenu);

function showMenu() {
  overlay.classList.remove('hidden');
  closeBtn.addEventListener('click', hideMenu);
  mobileMenu.addEventListener('click', hideMenu);
}

function hideMenu(e) {
  if (e.target.classList.contains('link')) {
    mobileMenu.removeEventListener('click', hideMenu);
  }
  overlay.classList.add('hidden');
  closeBtn.removeEventListener('click', showMenu);
}

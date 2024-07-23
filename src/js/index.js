const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

burgerMenu.addEventListener('click', showMenu);

function showMenu() {
  overlay.classList.remove('hidden');
  closeBtn.addEventListener('click', hideMenu);
}

function hideMenu() {
  overlay.classList.add('hidden');
  closeBtn.removeEventListener('click', showMenu);
}

const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

// Abre o menu
menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('show');
});

// Fecha o menu
closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('show');
});

// Fecha ao clicar fora
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('show');
});

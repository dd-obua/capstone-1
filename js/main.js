const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  menu.style.display = 'block';
  close.style.display = 'block';
});

close.addEventListener('click', () => {
  hamburger.style.display = 'block';
  menu.style.display = 'none';
  close.style.display = 'none';
});

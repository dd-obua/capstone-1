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

const showMore = document.querySelector('.more');
const showLess = document.querySelector('.less');
const showSpeaker = document.getElementsByClassName('show');
const hideSpeaker = document.getElementsByClassName('hide');

showMore.addEventListener('click', () => {
  showSpeaker.style.display = 'block';
  hideSpeaker.style.display = 'none';
  showMore.style.display = 'none';
  showLess.style.display = 'block';
});

showLess.addEventListener('click', () => {
  showSpeaker.style.display = 'none';
  hideSpeaker.style.display = 'block';
  showMore.style.display = 'block';
  showLess.style.display = 'none';
});

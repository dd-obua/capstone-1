const nav = document.querySelector('nav');
const menuIcons = document.querySelector('.menu-icons');
const hamb = document.querySelector('.hamburger');
const closeButton = document.querySelector('.close');
const options = document.querySelector('.nav-menu');

closeButton.style.display = 'none';
options.style.display = 'none';

const toggleMenu = () => {
  if (nav.classList.contains('click-icons')) {
    nav.classList.remove('click-icons');
    closeButton.style.display = 'none';
    options.style.display = 'none';
    hamb.style.display = 'block';
  } else {
    nav.classList.add('click-icons');
    closeButton.style.display = 'block';
    options.style.display = 'block';
    hamb.style.display = 'none';
  }
};

hamb.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

const insturctors = [
  {
    photo: './img/ps-2.jpeg',
    name: 'Dr. Zang B.',
    position: 'Dean, Faculty of Science - DJS Univeristy',
    message:
      "Every big thing starts small. It's not about how big you start. It's about how consistent you are willing to be, how much more meaningfull work you will put in.",
  },
  {
    photo: './img/ps-3.jpeg',
    name: 'Dr. Sheilla S.W',
    position:
      'Head of Department - Department of Computer Science - DJS Univeristy',
    message:
      'Even female dogs are capable of hunting and bring home good food. To write code requires the head. Both male and female gender have them.',
  },
  {
    photo: './img/ps-7.jpeg',
    name: 'Dr. Okello F.T.',
    position: 'Head of Mathematics - DJS University',
    message:
      'Under every key stroke, on evey mouse roll or mouse scroll, for every pixel of display and for every sound output. There are numbers behind the scenes. Understand the mathematics behind computing.',
  },
  {
    photo: './img/ps-4.jpeg',
    name: 'Dr. Kiwel S.R',
    position: 'Lecturer: Gaming & Animations Technology - DJS University',
    message:
      'Play your way to understanding technology. If it appears complex. Make it fun. Make it a game.',
  },
  {
    photo: './img/ps-5.jpeg',
    name: 'Ms Fiona F.K.',
    position: 'Lecturer, Web Technologies - DJS University',
    message:
      'Even if we may not all be friends. Infact, even if some people are your worst enemies, you will harmoniously meet on the Web. Not just a repository of information but where we socialize, do business, entertain ourselves ...',
  },
  {
    photo: './img/ps-6.jpeg',
    name: 'Ms. Mercy A.',
    position: ' Lecturer, Mobile Applications Development - DJS University',
    message:
      'Carry the web, you games, banks, navigation system in your pocket. Life is much easier with phones but most importantly, the phone applications.',
  },
];

const showLess = document.querySelector('.less');
const showMore = document.querySelector('.more');

const speakerContainer = document.querySelector('.speakers-container');
insturctors.forEach((instructor, index) => {
  const speaker = `
    <div class="speaker hide">
      <img src="${instructor.photo}" alt="" class="photo" />
      <div class="text">
        <h4 class="name">${instructor.name}</h4>
        <span>${instructor.position}</span>
        <span class="under-score"></span>
        <p>${instructor.message}</p>
      </div>
    </div>
  `;

  if (index < 2) {
    speakerContainer.innerHTML += speaker;
    showLess.style.display = 'none';
  }
});

let carousel = document.querySelector('.carousel');
let cellCount = 9;
let selectedIndex = 0;

const mod = (n, m) => {
  return ((n % m) + m) % m;
};

const adjustCharCardClass = (charId) => {
  // Check which character is selected then enable display for character info card
  let currentCharCard = document.getElementById('char-card');
  currentCharCard.className = '';
  currentCharCard.classList.add('char-select-right');

  switch (charId) {
    case 0:
      currentCharCard.classList.add('char-card-barbarian');
      break;
    case 1:
      currentCharCard.classList.add('char-card-druid');
      break;
    case 2:
      currentCharCard.classList.add('char-card-fighter');
      break;
    case 3:
      currentCharCard.classList.add('char-card-ranger');
      break;
    case 4:
      currentCharCard.classList.add('char-card-bard');
      break;
    case 5:
      currentCharCard.classList.add('char-card-dwarf');
      break;
    case 6:
      currentCharCard.classList.add('char-card-monk');
      break;
    case 7:
      currentCharCard.classList.add('char-card-paladin');
      break;
    case 8:
      currentCharCard.classList.add('char-card-rogue');
      break;
  }
};

const rotateCarousel = () => {
  let angle = (selectedIndex / cellCount) * -360;
  carousel.style.transform = 'translateZ(-423px) rotateY(' + angle + 'deg)';
  adjustCharCardClass(mod(selectedIndex, 9));
};

const getCarouselFrontCell = () => {
  return document.querySelector(
    `.carousel__cell:nth-child(${mod(selectedIndex, 9) + 1})`
  );
};

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', () => {
  let formerFrontCell = getCarouselFrontCell();
  formerFrontCell.classList.remove('selected_carousel_cell');

  selectedIndex--;

  let newFrontCell = getCarouselFrontCell();
  newFrontCell.classList.add('selected_carousel_cell');

  rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', () => {
  let formerFrontCell = getCarouselFrontCell();
  formerFrontCell.classList.remove('selected_carousel_cell');

  selectedIndex++;

  let newFrontCell = getCarouselFrontCell();
  newFrontCell.classList.add('selected_carousel_cell');

  rotateCarousel();
});

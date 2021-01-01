let carousel = document.querySelector('.carousel');
let cellCount = 9;
let selectedIndex = 0;

const mod = (n, m) => {
  return ((n % m) + m) % m;
}

const rotateCarousel = () => {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-423px) rotateY(' + angle + 'deg)';
}

const getCarouselFrontCell = () => {
	return document.querySelector(`.carousel__cell:nth-child(${mod(selectedIndex, 9) + 1})`);
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', () => {
  let formerFrontCell = getCarouselFrontCell();
  formerFrontCell.classList.remove('selected_carousel_cell');
  
  selectedIndex--;
  
  let newFrontCell = getCarouselFrontCell();
  newFrontCell.classList.add('selected_carousel_cell');
  
  rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', () => {
  let formerFrontCell = getCarouselFrontCell();
  formerFrontCell.classList.remove('selected_carousel_cell');
  
  selectedIndex++;
  
  let newFrontCell = getCarouselFrontCell();
  newFrontCell.classList.add('selected_carousel_cell');
  
  rotateCarousel();
});
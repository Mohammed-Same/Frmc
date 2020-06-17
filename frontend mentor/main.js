const btn = document.querySelector('.slider-btn');
const btnNext = document.querySelector('.slider-btn--next');
const btnPrev = document.querySelector('.slider-btn--prev');

const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');

const ToggleSlide2 = () => {
  slide1.style.display = 'none';
  slide2.style.display = 'flex';
}

const ToggleSlide1 = () => {
  slide2.style.display = 'none';
  slide1.style.display = 'flex';
}

btnPrev.addEventListener('click', ToggleSlide1);
btnNext.addEventListener('click', ToggleSlide2);

let slidePosition = 0;
const allSlides = document.querySelectorAll('.carousel__item');
const previousBtn = document.getElementById('carousel__button--previous');
const nextBtn = document.getElementById('carousel__button--next');

function updateSlide() {
  for (let slide of allSlides) {
    slide.classList.remove('carousel__item--visible');
  }

  allSlides[slidePosition].classList.add('carousel__item--visible');
}

function showPreviousSlide() {
  slidePosition === 0 ? (slidePosition = allSlides.length - 1) : slidePosition--;
  updateSlide();
}

function showNextSlide() {
  slidePosition === allSlides.length - 1 ? (slidePosition = 0) : slidePosition++;
  updateSlide();
}

previousBtn.addEventListener('click', showPreviousSlide);
nextBtn.addEventListener('click', showNextSlide);

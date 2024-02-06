function initCarousel() {
  // Elements selection
  const carouselInner = document.querySelector('.carousel__inner');
  const rightArrow = document.querySelector('.carousel__arrow_right');
  const leftArrow = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');

  // Initial state
  let currentSlideIndex = 0; // Start from the first slide


  // Initially, the left arrow should not be visible
  leftArrow.style.display = 'none';

  // Arrow click handlers
  rightArrow.addEventListener('click', () => {
    const slideWidth = carouselInner.offsetWidth; // Get the width of a slide
    if (currentSlideIndex < slides.length - 1) { // Ensure we don't go beyond the last slide
      currentSlideIndex++; // Move to the next slide
      carouselInner.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
    }
    updateArrowVisibility();
  });

  leftArrow.addEventListener('click', () => {
    const slideWidth = carouselInner.offsetWidth; // Get the width of a slide
    if (currentSlideIndex > 0) { // Ensure we don't go before the first slide
      currentSlideIndex--; // Move to the previous slide
      carouselInner.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
    }
    updateArrowVisibility();
  });

  function updateArrowVisibility() {
    // Show or hide the left arrow
    leftArrow.style.display = currentSlideIndex === 0 ? 'none' : '';

    // Show or hide the right arrow
    rightArrow.style.display = currentSlideIndex === slides.length - 1 ? 'none' : '';
  }
}


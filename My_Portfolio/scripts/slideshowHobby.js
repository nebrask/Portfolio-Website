let index = 0;
let slideTimeout;

// Display the slides of the slideshow
function displaySlides(n) {
  clearTimeout(slideTimeout);

  let slides = document.getElementsByClassName("slide");
  let indicators = document.getElementsByClassName("indicator");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (n === undefined) {
    index++;
  } else {
    index = n;
  }

  if (index > slides.length) {
    index = 1;
  }

  if (index < 1) {
    index = slides.length;
  }

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
  }

  slides[index - 1].style.display = "block";
  indicators[index - 1].classList.add("active");

  // Will automatically change slide every 5 seconds
  slideTimeout = setTimeout(displaySlides, 5000);
}

// Moves the slide by a particular position number
function moveSlides(n) {
  displaySlides(index + n);
}

// Ensure slideshow present a specific slide
function presentSlide(n) {
  displaySlides(n);
}

displaySlides();

/*
Resources:
- https://www.w3schools.com/howto/howto_js_slideshow.asp/
- https://www.freecodecamp.org/news/how-to-create-a-slideshow/
*/
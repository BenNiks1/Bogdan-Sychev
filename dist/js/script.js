// mobile menu
const mobileNav = document.querySelector(".header__inner-mobile-nav");
const menuButton = document.querySelector(".header__inner-menu");

menuButton.onclick = () => {
  mobileNav.classList.toggle("active");
};

// hide testimonials button

const partnersBtn = document.querySelector(".partners-btn");

partnersBtn.onclick = () => {
  const testimonialsSection = document.querySelector(".testimonials");
  testimonialsSection.classList.toggle("hidden");
  testimonialsSection.classList.contains("hidden")
    ? (testimonialsSection.style.display = "none")
    : (testimonialsSection.style.display = "flex");
};

// modal window

const sendBtn = document.querySelector(".send-btn");
const closeBtn = document.querySelector(".modal__close-btn");
const modal = document.querySelector(".modal");


sendBtn.onclick = () => {
  modal.style.display = "block";
};
const closeModalWindow = () => {
  modal.style.display = "none";
};
closeBtn.addEventListener("click", closeModalWindow);
modal.addEventListener("click", closeModalWindow);

// carusel
const prev = document.querySelector(".btn-prev"),
  next = document.querySelector(".btn-next"),
  slides = document.querySelectorAll(".slide"),
  dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

const currentSlide = (ind) => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    currentSlide(index);
  } else {
    index++;
    currentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    currentSlide(index);
  } else {
    index--;
    currentSlide(index);
  }
};

dots.forEach((item, indexDots) => {
  item.addEventListener("click", () => {
    index = indexDots;
    currentSlide(index);
  });
});

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);

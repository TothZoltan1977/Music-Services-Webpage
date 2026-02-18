/*search bar*/
const searhBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searhBarContainerEl.classList.toggle("active");
});
/*search bar*/

/*search filter*/
function filter() {
  var filterValue, input, ul, li, a, i;
  input = document.getElementById("search");
  filterValue = input.value.toUpperCase();
  ul = document.getElementById("Menu");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

/*image_slider*/

const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;
const totalSlides = slide.length;

/* Dots létrehozása */
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dots span");

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(i) {
  index = i;
  updateSlider();
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

/* Automatikus váltás */
setInterval(nextSlide, 5000);

updateSlider();

/*image_slider*/

/* hamburger menu */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
/* hamburger menu */

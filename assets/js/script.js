'use strict';

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

const getStartedElements = document.querySelectorAll(".get-started");
const contactSection = document.querySelector("#contact");

for (let i = 0; i < getStartedElements.length; i++) {
  getStartedElements[i].addEventListener("click", function () {
    // scroll to contact section
    contactSection.scrollIntoView({
      behavior: "smooth"
    });
  });

}


const reviewBtnPrev = document.querySelector(".review-btn.prev");
const reviewBtnNext = document.querySelector(".review-btn.next");
const reviewContainer = document.querySelector(".reviews-list");

function goCarousel(direction) {

  const currentScrollLeft = reviewContainer.scrollLeft;
  const containerWidth = reviewContainer.clientWidth;

  reviewContainer.scrollTo({
    left: direction === 'next' ? currentScrollLeft + containerWidth : currentScrollLeft - containerWidth,
    behavior: 'smooth' 
  });
}

reviewBtnPrev.addEventListener('click', function() {
  goCarousel('previous');
});

reviewBtnNext.addEventListener('click', function() {
  goCarousel('next');
});
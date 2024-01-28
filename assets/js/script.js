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


const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch(e.target.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Something went wrong!");
      }
    })
    .then(data => {
      console.log(data);
      form.reset();
      window.location.href = "/thank-you.html";
    })
    .catch(error => {
      console.log(error);
      alert("Something went wrong!");
    });
});
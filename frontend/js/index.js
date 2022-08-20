let UlElement = document.querySelector("header .container ul");
let burgerToggleBtn = document.querySelector(".toggle-btn");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");

function ToggleActive(e) {
  e.classList.contains("active")
    ? e.classList.remove("active")
    : e.classList.add("active");
  console.log("yes");
}

burgerToggleBtn.addEventListener("click", () => {
  UlElement.classList.toggle("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  UlElement.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  UlElement.classList.remove("active");
  overlay.classList.remove("active");
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    document.querySelector("header").style.position = "fixed";
  } else {
    document.querySelector("header").style.position = "static";
  }
});

let contactForm = document.querySelectorAll(".contact form .input");

contactForm.forEach((e) => {
  e.addEventListener("input", (e) => {
    if (e.currentTarget.value.length > 0) {
      e.currentTarget.nextElementSibling.classList.add("active");
    } else {
      e.currentTarget.nextElementSibling.classList.remove("active");
    }
  });
});

// // ********** set date ************
// // select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
// nav toggle new
const navtoggle = document.querySelector(".nav-toggle");
const linkscontainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navtoggle.addEventListener("click", function () {
  // linkscontainer.classList.toggle("show-links");
  const containerheight = linkscontainer.getBoundingClientRect().height;
  const linksheight = links.getBoundingClientRect().height;
  if (containerheight === 0) {
    linkscontainer.style.height = `${linksheight}px`;
  } else {
    linkscontainer.style.height = 0;
  }
});
// end of nav toggle new
// ********************
// fixed navbar
const navbar = document.getElementById("navbar");
const toplink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollheight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;
  if (scrollheight > navheight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
  if (scrollheight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});
let posit;
// end of fixed navbar
// ********************
// smooth scroll new
const scrolllinks = document.querySelectorAll(".scroll-link");
scrolllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent defauls
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // calculate height
    const navheight = navbar.getBoundingClientRect().height;
    const containerheight = linkscontainer.getBoundingClientRect().height;
    const fixednav = navbar.classList.contains("fixed");
    let position = element.offsetTop - navheight;
    console.log(position);
    if (!fixednav) {
      position = position - navheight;
    }
    if (navheight > 87) {
      position = position + containerheight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkscontainer.style.height = 0;
  });
});
// preload
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
// end of smooth scroll new
// // // ********** nav toggle ************
// // // select button and links
// const navBtn = document.getElementById("nav-toggle");
// const links = document.getElementById("nav-links");
// // add event listener
// navBtn.addEventListener("click", () => {
//   links.classList.toggle("show-links");
// });
// // // ********** navbar fixed ************
// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 62) {
//     navbar.classList.add("fixed");
//   } else {
//     navbar.classList.remove("fixed");
//   }
// });
// // smooth scroll
// const scrollLinks = document.querySelectorAll(".scroll-link");

// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     links.classList.remove("show-links");
//     const id = e.target.getAttribute("href").slice(1);
//     const element = document.getElementById(id);
//     // position
//     let position;
//     if (navbar.classList.contains("fixed")) {
//       position: element.offsetTop - 87.25;
//     } else {
//       position = element.offsetTop - 174.5;
//     }
//     if (window.innerWidth < 992) {
//       if (navbar.classList.contains("fixed")) {
//         position = element.offsetTop - 87.25;
//       } else {
//         position = element.offsetTop - 350 - 87.25;
//       }
//     }
//     // // window scrollto
//     window.scrollTo({
//       left: 0,
//       top: element.offsetTop,
//       behavior: "smooth",
//     });
//   });
// });

// document.getElementById("open-popup").addEventListener("click", function () {
//   document.querySelector(".popup").style.display = "flex";
// });
// document.querySelector(".close-popup").addEventListener("click", function () {
//   document.querySelector(".popup").style.display = "none";
// });
const popup = document.getElementById("popup");
const closepopup = document.querySelector(".close-popup");
const openpopup = document.getElementById("open-popup");
// btn.onclick = function () {
//   popup.style.display = "block";
//   document.body.style.overflow = "hidden"; // ADD THIS LINE
//   document.body.style.height = "100%"; // ADD THIS LINE
// };

// // When the user clicks on <span> (x), close the modal
// closepopup.onclick = function () {
//   popup.style.display = "none";
//   document.body.style.overflow = "auto"; // ADD THIS LINE
//   document.body.style.height = "auto"; // ADD THIS LINE
// };
// When the user clicks the button, open the modal
// openpopup.onclick = function () {
//   popup.style.display = "block";
//   document.body.style.overflow = "hidden"; // ADD THIS LINE
//   document.body.style.height = "100%"; // ADD THIS LINE
// };

// // When the user clicks on <span> (x), close the modal
// closepopup.onclick = function () {
//   popup.style.display = "none";
//   document.body.style.overflow = "auto"; // ADD THIS LINE
//   document.body.style.height = "auto"; // ADD THIS LINE
// };

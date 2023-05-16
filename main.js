/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollheader() {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewpoint height ,add the scroll-header class to the header tag
  if (this.scrolly >= 50) header.classlist.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollheader);

/*=============== SERVICES MODAL ===============*/
const modalviews = document.querySelectorAll(".services_model"),
  modelbtns = document.querySelectorAll(".services_button"),
  modelclose = document.querySelectorAll(".services_model-close");

let model = function (modalclick) {
  modalviews[modalclick].classList.add("active-model");
};

modelbtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    model(i);
  });
});
modelclose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalviews.forEach((mv) => {
      mv.classList.remove("active-model");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerportfolio = mixitup(".work_container", {
  selectors: {
    target: ".work_card",
  },
  animation: {
    duration: 300,
  },
});

// /* Link active work */   HOVER EFFECT ON RECANT WORK
const linkwork = document.querySelectorAll(".work_item");

function activework() {
  linkwork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkwork.forEach((l) => l.addEventListener("click", "active-work"));

/*=============== SWIPER TESTIMONIAL ===============*/
let swipertestimonial = new Swiper(".testimonial_container", {
  spaceBetween: 24,
  loop: true,
  grabcursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrolly = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const seletedTheme = localStorage.getItem('selected-theme')
const sectionIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

  if(seletedTheme){
    document.body.classList[seletedTheme==='dark'?'add':'remove'](lightTheme)
    themeButton.classList[seletedIcon==='bx bx-sun'?'add':'remove'](iconTheme)
  }

  themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
  })

/*=============== SCROLL REVEAL ANIMATION ===============*/

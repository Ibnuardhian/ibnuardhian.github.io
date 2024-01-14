<<<<<<< HEAD
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    autoplay: {
        delay: 3000, 
    },

    navigation: {
        nextEl: '.geserButton',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

// Menambahkan delay pada tombol nextEl
let nextButton = document.querySelector('.geserButton');
nextButton.addEventListener('click', function() {
    setTimeout(function() {
        homeSwiper.slideNext();
    }, 1000); // Delay 1 detik sebelum slider bergeser
});



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,

    autoplay: {
        delay: 3000, // Set the autoplay delay in milliseconds (5 seconds in this case)
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .lesgow__img`,{origin: 'left'})
sr.reveal(`.about__img, .lesgow__data`,{origin: 'right'})

/*=============== KLIK BUTTONS KE DASHBOARD CATAT! ===============*/

document.querySelectorAll('.KeCatat').forEach(function(element) {
    element.addEventListener('click', function() {
        window.location.href = '../pages/dashboard.html';
    });
});


/*=============== LOADER ===============*/
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
=======
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    autoplay: {
        delay: 3000, 
    },

    navigation: {
        nextEl: '.geserButton',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

// Add a click event listener to the parent container of all "Geser Lebih Lanjut" buttons
document.getElementById("home").addEventListener("click", function (event) {
    // Check if the clicked element or its ancestor has the class "geserButton"
    if (event.target.closest(".geserButton")) {
        // Calculate the index of the next slide
        let nextIndex = homeSwiper.activeIndex + 1;

        // Check if it's the last slide
        if (nextIndex >= homeSwiper.slides.length) {
            nextIndex = 0;
        }

        // Go to the next slide
        homeSwiper.slideTo(nextIndex, 1000, false); // Use the third parameter 'false' to disable animation
    }
});

// Get the geserButton element
let geserButton = document.getElementById("geserButton");

// Add a click event listener to the geserButton
geserButton.addEventListener("click", function () {
    // Calculate the index of the next slide
    let nextIndex = homeSwiper.activeIndex + 1;

    // Check if it's the last slide
    if (nextIndex >= homeSwiper.slides.length) {
        nextIndex = 0;
    }

    // Go to the next slide
    homeSwiper.slideTo(nextIndex, 1000, false); // Use the third parameter 'false' to disable animation
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,

    autoplay: {
        delay: 3000, // Set the autoplay delay in milliseconds (5 seconds in this case)
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.trick__content, .footer__content`,{interval: 100})
sr.reveal(`.about__data, .lesgow__img`,{origin: 'left'})
sr.reveal(`.about__img, .lesgow__data`,{origin: 'right'})

/*=============== KLIK BUTTONS KE DASHBOARD CATAT! ===============*/

document.querySelectorAll('.KeCatat').forEach(function(element) {
    element.addEventListener('click', function() {
        window.location.href = '../pages/dashboard.html';
    });
});


/*=============== LOADER ===============*/
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
>>>>>>> fe549b6f3060299f44caa78f5e0f7dbcf48d35b3
  
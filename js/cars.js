/*show menu*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/*---MENU SHOW--*/
/*validate if constant exists*/
if(navToggle){
navToggle.addEventListener('click',()=>{
  navMenu.classList.add('show-menu')
})
}

/*---MENU HIDDEN--*/
/*validate if constant exists*/
if(navClose){
navClose.addEventListener('click',()=>{
  navMenu.classList.remove('show-menu')
})
}
/*---REMOVE MENU MOBILE---*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*---CHANGE BACKGROUND HEADER---*/
function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollHeader)

/*popular swiper*/
let swiperPopular = new Swiper(".popular-container",{
  width:210,
  loop: true,
  spaceBetween: 24,
  slidesPerview: 'auto',
  grabCursor: true,
  
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  braekPoints: {
    768: {
      slidesPerview:3,
    },
    1024: {
     
      spaceBetween: 48,
    },

  }
});
/* mixitup filter featured */
let mixerFeatured = mixitup('.featured-content',{
    selectors: {
    target: '.featured-card'
    },
    animation: {
      duration: 300
    }
});

/* link active featured */
const linkFeatured = document.querySelectorAll('.featured-item')

function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*---show scroll up---*/
function scrollup(){
  const scrollup=document.getElementById('scroll-up');

  if(this.scrollY>=350)scrollup.classList.add('show-scroll');else scrollup.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollup)

/*---scroll sections active link---*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY= window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* scroll reveal animation*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // rest: true
})
sr.reveal('.home-title, .popular-container, .features-img, .featured-filters')
sr.reveal('.home-subtitle', {delay:500})
sr.reveal('.home-elec', {delay:600})
sr.reveal('.home-img', {delay:800})
sr.reveal('.home-car-data',{delay:900, interval:100, origin:'bottom'})
sr.reveal('.home-button',{delay:1000, interval:100, origin:'bottom'})
sr.reveal('.about-group,.offer-data',{origin:'left'})
sr.reveal('.about-data,.offer-img',{origin:'right'})
sr.reveal('.features-map',{delay:600,origin:'bottom'})
sr.reveal('.features-card',{interval:300})
sr.reveal('.featured-card ,.logos-content,.footer-content',{interval:100})

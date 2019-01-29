// STARTBUTTON : 
$('.start_button').click(function moveBlock(){
    $('html, body').animate({
        scrollTop: $('h2').offset().top
    }, 1000);
    console.log('scroll')
})

// CAROUSEL :
const carousel = new Carousel();
carousel.startCarousel();

// CANVAS :
const canva = new Canvas();

// MAP :
const map = new Map();

// STOCKAGE DES INFOS :
const stockInfos = new Stockinfos();

// RESA : 
const resa = new Resa();
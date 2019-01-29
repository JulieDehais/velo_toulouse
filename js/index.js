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
new Canvas();

// MAP :
new Map();

// STOCKAGE DES INFOS :
new Stockinfos();

// RESA : 
new Resa();
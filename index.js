// BOUTON "COMMENCER L'EXPERIENCE" :
$('.start_button').click(function moveBlock(){
    $('html, body').animate({
        scrollTop: $('h2').offset().top
    }, 1000);
    console.log('scroll')
})

// CARROUSEL :
const carousel = new Carousel();
carousel.startCarousel();

// MAP :
const map = new Map();


// BOUTON "COMMENCER L'EXPERIENCE" :

$('.start_button').click(function moveBlock(){
    $('html, body').animate({
        scrollTop: $('h2').offset().top
    }, 1000);
    console.log('scroll')
}) 

// CARROUSEL :

var $carousel = $('.carousel_img')
    $img = $('.carousel_img img')
    indexImg = $img.length - 1
    i = 0,
    $currentImg = $img.eq(i);

$img.css('display', 'none');
$currentImg.css('display', 'block');

$('.next').click(nextImg)
$(document).keydown(function(event){
    if(event.keyCode == 39){
        nextImg()
    }
    });
    console.log('touche droite')
    
function nextImg(){
    console.log('click_right_button')
    i++; 
    console.log('incrementation')
    if(i <= indexImg){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = indexImg;
    }
    console.log('choix_affichage_img')
};

$('.prev').click(prevImg)
$(document).keydown(function(event){
    if(event.keyCode == 37){
        prevImg()
    }
    });
    console.log('touche gauche')

function prevImg(){
    i--;
    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }    
};

function slideImg(){
    setTimeout(function()
    {           
        if(i < indexImg){
        i++; 
        }
         else{
        i = 0;
        }

    $img.css('display', 'none');
    $currentImg = $img.eq(i);
    $currentImg.css('display', 'block');

    slideImg();
    }, 5000); 
}

slideImg(); 

function stopImg(){
    clearTimeout
}

$('.fa-pause-circle').click(stopImg)
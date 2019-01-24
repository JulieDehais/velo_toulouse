class Resa {
    
    constructor() {
        this.initResa()
        this.eventHandlers();
    }

    initResa() {
        $(".stopReservation")[0].style.display = "none";
        $(".infos-reservation")[0].style.display = "none";
        $(".messageCurrentReservation")[0].style.display = "none";
        $(".messageAnnulation")[0].style.display = "none";
        this.signature = false
    }
   
    eventHandlers() {
        $('canvas').mousedown(() => (this.signature = true));
        $("#signature-validation").click(() => this.startResa());
    }

    // VALIDATION SIGNATURE + RESTITUTION RESA + CHRONO
    startResa() {
        if ($('.timer').text() === "" && this.signature == true) {
            $(".infos-reservation").css("display", "block");
            $(".no-reservation").css("display", "none");
            $(".stopReservation").css("display", "block");
            $(".messageCurrentReservation").css("display", "none");
        
            var userFirstNameStored = localStorage.getItem('userFirstName');
            var userLastNameStored = localStorage.getItem ('userLastName');
            var nameStationStored = sessionStorage.getItem('stationName');
            console.log(userFirstNameStored, userLastNameStored, nameStationStored);
            
            $(".stationBooked").text(nameStationStored);
            $(".userName").text(userFirstNameStored + " " + userLastNameStored);
            $('html, body').animate({
                scrollTop: $('#signature-validation').offset().top
                }, 1000);
        
            var min = 20;
            var sec = 0;
            var time = (min*60+sec); // 20*60 + 0 -> nombre de secondes (1200)
         
            var chrono = setInterval(function (){
             min = Math.floor(time/60); // secondes/60 -> minutes
             sec = Math.floor((time-min*60)); // on remet les minutes en sec -> les enlever à 'time'
             time--; // -1sec toutes les 1000ms
             sessionStorage.setItem('timer', time);
             $('.timer').text(min+':'+sec);
             
            if (time == 0) {
                clearInterval(chrono);
                sessionStorage.removeItem('stationName');
                console.log(sessionStorage, localStorage);
                $('.infos-reservation').css("display", "none");
                $('.messageAnnulation').css("display", "block");
            }
        
            },1000);
        
            $(".stopReservation").click(function() {
                clearInterval(chrono);
                $('.timer').text("");
                sessionStorage.removeItem('stationName')
                console.log(sessionStorage, localStorage);
                $('.infos-reservation').css("display", "none");
                $('.messageAnnulation').css("display", "block");
                $(".messageCurrentReservation").css("display", "none");
                $(".signature").css("display", "none");
            }
        )}
    
        else if ($('.timer').text() !== "") {
            $(".messageCurrentReservation").css("display", "block");
        }
    
       }

}





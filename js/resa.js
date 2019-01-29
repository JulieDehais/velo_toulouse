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

    timer() {
        
        this.dateNow = new Date();
        let chrono = setInterval(() => {
        
        let time = 1200 - (this.getDate().getTime() - sessionStorage.getItem('date')) / 1000;
        let min = Math.floor(time/60); // secondes/60 -> minutes
        let sec = Math.floor((time-min*60)); // on remet les minutes en sec -> les enlever à 'time'
        //  time--; // -1sec toutes les 1000ms
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
    }

    // VALIDATION SIGNATURE + RESTITUTION RESA + CHRONO
    startResa() {
        if ($('.timer').text() === "" && this.signature == true) {
            $(".infos-reservation").css("display", "block");
            $(".no-reservation").css("display", "none");
            $(".stopReservation").css("display", "block");
            $(".messageCurrentReservation").css("display", "none");
            $(".messageAnnulation").css("display", "none");
        
            const userFirstNameStored = localStorage.getItem('userFirstName');
            const userLastNameStored = localStorage.getItem ('userLastName');
            const nameStationStored = sessionStorage.getItem('stationName');
            console.log(userFirstNameStored, userLastNameStored, nameStationStored);
            
            $(".stationBooked").text(nameStationStored);
            $(".userName").text(userFirstNameStored + " " + userLastNameStored);
            $('html, body').animate({
                scrollTop: $('#signature-validation').offset().top
                }, 1000);
        
            const date = new Date();
            sessionStorage.setItem('date', date.getTime());

            this.timer();
           
        
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





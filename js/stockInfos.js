class Stockinfos {

    constructor() {
        this.initStockInfos();
        this.eventHandlers();
    }

    initStockInfos() {
        $(".signature")[0].style.display = "none";
        $(".errorMessage")[0].style.display = "none";
    }

    
    // STOCKAGE DES INFOS (UTILISATEURS & STATION) + OUVERTURE CANVAS SIGNATURE
    eventHandlers() {
        $(".reserver").click(function() {
            const nameStation = $(".nom-station").text()
            const userFirstName = $(".userFirstName").val()
            const userLastName = $(".userLastName").val()
            const availableBikes = $(".velos-station").text()
            console.log(nameStation, userFirstName, userLastName);
        
            if (availableBikes !== "0" && nameStation !== "Aucune station sélectionnée" && userFirstName !== "" && userLastName !== "") {
                $(".signature").css("display", "block");
                $(".errorMessage").css("display", "none");
                $('html, body').animate({
                scrollTop: $('.reserver').offset().top
                }, 1000);
            
                sessionStorage.setItem('stationName', nameStation);
                localStorage.setItem('userFirstName', userFirstName);
                localStorage.setItem('userLastName', userLastName);
                console.log(sessionStorage, localStorage);
            }
            else {
                $(".errorMessage").css("display", "block");
                $('html, body').animate({
                    scrollTop: $('.reserver').offset().top
                    }, 1000);
            }
        });	
    }

}




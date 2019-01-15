// INTEGRATION DE LA MAP

var mymap = L.map('mapid').setView([43.602475, 1.440643], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18, 
    zoom: 5,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// INTEGRATION DES INFORMATIONS DES STATIONS

function infoCurrentStation(x) {
    if (x.status == 'OPEN') {
        var status = $('.statut-station')
        status.text('STATION OUVERTE')
    }
    else {
        status.text('STATION FERMEE')
    }
    var name = $('.nom-station')
    name.text(x.name)
    var address = $('.adresse-station')
    address.text(x.address)
    var nbvelos = $('.velos-station')
    nbvelos.text(x.available_bikes)
}

// INTEGRATION DES MARQUEURS

var markers = L.markerClusterGroup();
mymap.addLayer(markers);

var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

$.ajax({
    type: 'Get',
    url: "https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=5786200020fe0183f85fdeeab23cd5f866b1bb4d",
    dataType: 'json',
    success: function(data){
        $(data).each(function(index, value){    
    markers.addLayer(L.marker(value.position, {icon: value.status == 'OPEN' && value.available_bikes > 0 ? greenIcon : redIcon, value}).bindPopup(`Station Vélô ${this.name}`).openPopup().on("click", () => {
    infoCurrentStation(this) 
    console.log(this)})
    );
        })
    } 
});

// STOCKAGE DES INFOS (UTILISATEURS & STATION) + OUVERTURE CANVAS SIGNATURE

document.getElementsByClassName("signature")[0].style.display = "none";
document.getElementsByClassName("errorMessage")[0].style.display = "none";

$(".reserver").click(function() {
    var nameStation = $(".nom-station").text()
    var userFirstName = $(".userFirstName").val()
    var userLastName = $(".userLastName").val()
    console.log(nameStation, userFirstName, userLastName);

    if (nameStation !== "Aucune station sélectionnée" & userFirstName !== "" & userLastName !== "") {
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

// RESTITUTION DES INFOS CONCERNANT LA RESERVATION 

document.getElementsByClassName("infos-reservation")[0].style.display = "none";

$("#signature-validation").click(function() {
    $(".infos-reservation").css("display", "block");
    $(".no-reservation").css("display", "none");

    var userFirstNameStored = localStorage.getItem('userFirstName');
    var userLastNameStored = localStorage.getItem ('userLastName');
    var nameStationStored = sessionStorage.getItem('stationName');
    console.log(userFirstNameStored, userLastNameStored, nameStationStored);
     
    $(".stationBooked").text(nameStationStored);
    $(".userName").text(userFirstNameStored + " " + userLastNameStored);
    $('html, body').animate({
        scrollTop: $('#signature-validation').offset().top
        }, 1000);
});


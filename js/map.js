
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

// INTEGRATION DES MARQUEURS (RECUPERATION DES DONNEES JSON)
$.ajax({
    type: 'Get',
    url: "https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=5786200020fe0183f85fdeeab23cd5f866b1bb4d",
    dataType: 'json',
    success: function(data){
        $(data).each(function(index, value){
            var markers = L.marker(value.position, value.address).addTo(mymap).bindPopup("Station Vélô :").openPopup();
        })
    } 
});

// CREATION DATA
var data = {
    info: $('.statut-station'),
    name: $('.nom-station'),
    address: $('.adresse-station'),
    available_bikes: $('.velos-station'),
};

// INTEGRATION INFOS STATIONS

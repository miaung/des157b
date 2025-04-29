(function(){
    'use strict';

    // add your script here

    var map = L.map('map').setView([38.55, -121.74], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([38.543, -121.754]).addTo(map);

    var circle = L.circle([38.535, -121.756], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [38.563, -121.767],
        [38.561, -121.764],
        [38.561, -121.767]
    ]).addTo(map);

    marker.bindPopup("<b>Cruess Hall</b><br>Where I study design.").openPopup();
    circle.bindPopup("Did you know that UC Davis is the largest out of all of the UC campuses?");
    polygon.bindPopup("This is where I shop for groceries.");

    var popup = L.popup()
    .setLatLng([38.535, -121.756])
    .setContent("This is where I attend school.")
    .openOn(map);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);
    
}());
/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//1) Fetch with Ajax
//2) Parse JSON
var parsedData;
var loadData = function(){
  var downloadData = $.ajax("https://gist.githubusercontent.com/rfinfer/fa95f97b26b74ad97b87e7da94ff6275/raw/4b4fb4d093e40ea69a816ff4c96f1f1f9e87b103/bike_ped.geojson");
  downloadData.done(function(data) {
    parsedData = JSON.parse(data);
  });
};
//3)add all markers to map for first slide
var allMarkers;
var showSlideOne = function(){
    allMarkers = L.geoJSON(parsedData).addTo(map);
};
//4)remove old markers
var removeLayer;
var removeLayer = function() {
  allMarkers.eachLayer(function(layer) {map.removeLayer(layer);
  });
};

//5)add specified markers to map for second slide

// var deaths = parsedData.eachLayer(function(layer) {
//     if (feature.properties.FATAL_COUN > 0) {
//         L.marker(feature.properties.FATAL_COUN > 0).addTo(map);
//     }
// });

//
// var skullIcon = L.icon({
//     iconUrl: 'Skull_and_crossbones.svg',
//
//     iconSize:     [60, 32], // size of the icon
//     iconAnchor:   [32, 80], // point of the icon which will correspond to marker's location
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });


// var fatals = function(feature) {
//   if (feature.properties.FATAL_COUN > 0) {
//     return {L.marker({icon: skullIcon}).addTo(map);};
//   };
  //this all needs to be in clickNextButton (only for slide 2 though)
// marker = L.marker([51.5, -0.09]).addTo(mymap);


//5) zoom to certain intersection for third slide
//6)zoom to different intersection for fourth slide

//relate the buttons to their specified click events
$('#button-next').click(function(event){
  deaths(clickNextButton());

});


// +        $("#text-input1").text("URL");
// +        var URL= $("#text-input1").val();
// how to put the click next slide here?

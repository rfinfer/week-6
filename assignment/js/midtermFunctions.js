/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//1) Fetch with Ajax
//2) Parse JSON
var parsedData;
var allMarkers;
var showSlideOne = function(){
  var downloadData = $.ajax("https://gist.githubusercontent.com/rfinfer/fa95f97b26b74ad97b87e7da94ff6275/raw/4b4fb4d093e40ea69a816ff4c96f1f1f9e87b103/bike_ped.geojson");
  downloadData.done(function(data) {
    parsedData = JSON.parse(data);
    allMarkers = L.geoJSON(parsedData).addTo(map);
    console.log("loading and plotting");
  });
};
//3)add all markers to map for first slide
// var allMarkers;
// var showSlideOne = function(){
//     allMarkers = L.geoJSON(parsedData).addTo(map);
//     console.log("slide one been showed");
// };
//4)remove old markers

var removeLayer = function() {
  allMarkers.eachLayer(function(layer){
    map.removeLayer(layer);
  });
};

var removeLayer2 = function() {
  slideTwoMarkers.eachLayer(function(layer){
    map.removeLayer(layer);
  });
};

var slideTwoMarkers;

var showSlideTwo = function(){
  var deaths;
  deaths = _.filter(parsedData.features,function(thing){return thing.properties.FATAL_COUN>0;});
  slideTwoMarkers = L.geoJSON(deaths).addTo(map);
  };


// var newZoom = L.map('map', {
//   center: [40.053734535337945, -75.04627704620363],
//   zoom: 13
// });
// var newCenter =
// map.setZoom(newZoom);
// map.setView(newCenter);
//
// var map = L.map('map', {
//   center: [39.9522, -75.1639],
//   zoom: 12
// });



var latlng= L.latLng(40.053734535337945, -75.04627704620363);
//var myZoom = 15;

var showSlideThree2 = function(){
  map.setView(latlng, 15);
};

// var showSlideThree1 = function(){
//   map.setZoom(myZoom);
// };

//5)add specified markers to map for second slide
//var featureGroup;



// var deaths = (feature.properties.FATAL_COUN>0)
// var deaths = function() {
//   allMarkers.eachLayer(function(layer)
//   {if(feature.properties.FATAL_COUN >0){
//     map.deaths(layer);
//     });
//   };
// };

// var myStyle = function(feature) {
//   if (feature.properties.COLLDAY == "FRI") {
//     return {fillColor: 'red'};
//   }
//     else if
//       (feature.properties.COLLDAY == "MON"){
//         return {fillColor: 'green'};
//       }
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
$("#next").click(function(event){
  clickNextButton();
  showCurrentSlide();
});

$("#previous").click(function(event){
  clickPreviousButton();
  console.log("undoing it")
});

// $('#button-next').click(function(){
//   clickNextButton();
//   if (slide.number === "1"){
//     slideFunction()
//   }
// };




// +        $("#text-input1").text("URL");
// +        var URL= $("#text-input1").val();
// how to put the click next slide here?

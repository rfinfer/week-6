/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//1) Fetch with Ajax
var showSlideOne = function(){
  var parsedData;
  var downloadData = $.ajax("https://gist.githubusercontent.com/rfinfer/fa95f97b26b74ad97b87e7da94ff6275/raw/4b4fb4d093e40ea69a816ff4c96f1f1f9e87b103/bike_ped.geojson");
  downloadData.done(function(data) {
//2) Parse JSON
    parsedData = JSON.parse(data);
    L.geoJSON(parsedData).addTo(map);
  });
};
//3)add all markers to map for first slide


//4)add specified markers to map for second slide
//5) zoom to certain intersection for third slide
//6)zoom to different intersection for fourth slide

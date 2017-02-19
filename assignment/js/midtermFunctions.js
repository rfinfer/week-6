/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//1) Fetch with Ajax
var parsedData;
var downloadData = $.ajax("https://gist.githubusercontent.com/rfinfer/fa95f97b26b74ad97b87e7da94ff6275/raw/4b4fb4d093e40ea69a816ff4c96f1f1f9e87b103/bike_ped.geojson");
downloadData.done(function(data) {
  parsedData = JSON.parse(data);
});
//2) Parse JSON

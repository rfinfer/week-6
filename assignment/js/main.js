
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 12
});

L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


  /* ================================
  Start your code here
  ================================ */

  /* ================================
  End your code here
  ================================ */
//TO DO LIST.
//mock up main html
//change that html with sayCurrentSlideName
//write each slide's function
//change to next slide function when button is clicked--ask for help on friday.

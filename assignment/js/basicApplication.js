/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "Slide 1",
      "description": "all bike and ped crash data"},
    {
      "name": "Slide 2",
      "language": "all bike and ped fatalities"},
    {
      "name": "Slide 3",
      "description": "a certain intersection"}
  ]
};

var clickNextButton = function(event) {
  if (state.slideNumber<state.slideData.length) {
    state.slideNumber = state["slideNumber"] + 1;
  };
  console.log("slideNumber", state.slideNumber);
};


//thing.click(clickNextButton)
var clickPreviousButton = function() {
  if (state.slideNumber >0) {
    state.slideNumber = state["slideNumber"] - 1;
  }
  console.log("slideNumber2", state.slideNumber);
};

var saySlideName = function(slide) {

  console.log("the value of slide is", slide.name);
  // console.log("state.slideData.name");
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
}

var secondSlide = state.slideData[1]
saySlideName(secondSlide);

var thirdSlide = state.slideData[2]
saySlideName(thirdSlide);

var sayCurrentSlideName = function() {
  var slideDataPlace = state["slideNumber"]
  console.log(state.slideData[slideDataPlace].name);
}

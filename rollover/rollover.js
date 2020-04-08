// Exercise - Rollover
// 1. Review the list of events on: http://api.jquery.com/category/events/
// 2. Create code that listens for a hover event. When the user rolls over a div, place the word "over" in that div.
// 3. When the user mouses out of the div, place the word "out" in the div.
$( document ).ready(function() {
// Handle mouseover and mouseout with hover
$("div").hover(function() {
    // mouseover
    $("div").text("Over");
  }, function() {
    // mouseout
    $("div").append(`<div><h1>Out</h1></div>`);
  });

});
// Exercise - Append
// 1. Use jQuery to select the body element
// 2. Use the .append() function to append a new hyperlink.
// 3. Use the .attr() function to set an href attribute on the hyperlink. Open it in your
// DOM and check it's clickable.

$( document ).ready(function() {

    $('body').append('<br> <h2><a>Duck Duck Go</a></h2>');
    $('a').attr('href', 'https://duckduckgo.com/');

});
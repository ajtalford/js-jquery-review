// Exercise - Capitalise every element
// 1. Write a short function to capitalise every element of the array.
// 2. You must use the Array#map function and the String#uppercase function.

var lowC = ["Coffee","Espresso","Tea","Latte","Acid Reflux"];
lowC = lowC.map(function(upC){ return upC.toUpperCase() })

console.log(lowC);
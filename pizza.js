// Exercise - Pizza
// 1. Create an array of pizza toppings
// 2. Write a function that we can call
// 3. Function should return a string that describes the pizza, example “A delicious
// pizza with Cheese and Pepperoni and Garlic and Peppers.”

var toppings = ['Cheese', 'Mushroom', 'Spinach', 'Garlic'];
var desc = 'A delicious pizza with options of'
var desc2 = '\njust mix and match as you like!!'

function describePizza(attributes){
  return `${desc} ${toppings[0]}, ${toppings[1]}, ${toppings[2]}${desc2}`;
}

console.log(describePizza());

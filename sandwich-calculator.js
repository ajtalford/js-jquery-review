// 1. Write a function called sandwich calculator. This should accept one value: slicesOfBread
// 2. The function should return the total number of possible sandwiches based on the amount of slices available, so if there are 10 slices, it should return 5. Test your function with an alert box.
// 3. Extend your function so it accepts two values, slicesOfBread and slicesOfCheese.
// 4. It takes two slices of bread and one of cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are 10 slices of bread, but only 1 of cheese, it should return 1. You'll need an if statement to make this work.


function sandwichCalculator(slicesOfBread, slicesOfCheese) {
    if (slicesOfBread > 1 && slicesOfCheese > 0) {
        if (slicesOfCheese < slicesOfBread / 2) {
            var sandwiches = slicesOfCheese
            return console.log(sandwiches);
        } else {
            var sandwiches = slicesOfBread / 2;
            return console.log(sandwiches);
        }
    } else {
        var sandwiches = "No sandwiches"
        return console.log(sandwiches);
    }
}

sandwichCalculator(50, 77); 
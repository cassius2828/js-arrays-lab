///////////////////////////
// exercise 1
///////////////////////////
const foods = [];

console.log("Exercise 1 result: ", foods);

///////////////////////////
// exercise 2
///////////////////////////
foods.push("pizza", "cheeseburger");
console.log("Exercise 2 result: ", foods);

///////////////////////////
// exercise 3
///////////////////////////
foods.unshift("taco");
console.log("Exercise 3 result: ", foods);

///////////////////////////
// exercise 4
///////////////////////////
const favFood = foods[1];
console.log("Exercise 4 result: ", favFood);

///////////////////////////
// exercise 5
///////////////////////////
foods.splice(2, 0, "tofu");
console.log("Exercise 5 result: ", foods);

///////////////////////////
// exercise 6
///////////////////////////
foods.splice(1, 1, "sushi");
console.log("Exercise 6 result: ", foods);
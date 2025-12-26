/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-26
 * @fileoverview this program creates a certain output based on your colour choice of sweaters
 */

//variable
const colour = prompt("Choose a sweater colour from the available choices: Blue, Black, Red, White:");

//if else statement
if (colour === "Blue") {
  console.log("This colour doesn't go well with your eyes.");
} else if (colour === "Black" || "White") {
  console.log("You have enough sweaters in this colour.");
} else if (colour === "Red") {
  console.log("This colour will look good on you");
  console.log("How about a pair of jeans to go with the sweater?");
} else {
  console.log("Your colour choice is invalid.");
}
console.log("\nDone");
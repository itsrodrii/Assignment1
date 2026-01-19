/*
 * Assignment 1: JavaScript Arrow Functions
 * Complete the exercises below by converting traditional functions to arrow functions
 * and writing new arrow functions from scratch.
 * Uncomment the tests at the bottom of the file to test that the functions you wrote work as intended
 */

// =============================================
// PART 1: CONVERT TO ARROW FUNCTIONS
// =============================================

// Exercise 1
const greetUserArrow = name => `Hello, ${name}!`;

// Exercise 2
const calculateAreaArrow = (length, width) => length * width;

// Exercise 3
const getCurrentTimeArrow = () => new Date().toLocaleTimeString();

// Exercise 4
const validatePasswordArrow = password => {
    if (password.length >= 8) {
        return "Password is valid";
    } else {
        return "Password must be at least 8 characters";
    }
};

// Exercise 5
const processOrderArrow = (item, quantity) => {
    const total = item.price * quantity;
    const tax = total * 0.08;
    const finalAmount = total + tax;
    return `Order total: ${finalAmount.toFixed(2)}`;
};

// =============================================
// PART 2: WRITING ARROW FUNCTIONS
// =============================================

// Exercise 6
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// Exercise 7
const calculateVolume = (length, width, height) => length * width * height;

// Exercise 8
const getFirstElement = array => array[0];

// Exercise 9
const makeUppercase = str => str.toUpperCase();

// Exercise 10
const getSquare = num => num * num;

// Exercise 11
const checkAge = age => age >= 18 ? "Adult" : "Minor";

// Exercise 12
const calculateAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Exercise 13
const evaluateScores = (score1, score2, score3) => {
    const topScore = Math.max(score1, score2, score3);
    if (topScore >= 90) {
        return `Excellent work! Top score: ${topScore}`;
    } else if (topScore >= 70) {
        return `Good job! Top score: ${topScore}`;
    } else {
        return `Keep practicing! Top score: ${topScore}`;
    }
};

// Exercise 14
const calculateSalePrice = (productName, price) => {
    const discountedPrice = price * 0.8;
    return `Product: ${productName} - Sale Price: $${discountedPrice}`;
};


// =============================================
// TEST YOUR FUNCTIONS (DO NOT MODIFY)
// =============================================

// You can uncomment these lines to test your functions

console.log("Testing Part 1:");
console.log(greetUserArrow("Alice")); // Should output: "Hello, Alice!"
console.log(calculateAreaArrow(5, 3)); // Should output: 15
console.log(getCurrentTimeArrow()); // Should output current time
console.log(validatePasswordArrow("secret")); // Should output: "Password must be at least 8 characters"
console.log(processOrderArrow({price: 10}, 2)); // Should output: "Order total: $21.60"

console.log("\nTesting Part 2:");
console.log(makeUppercase("hello")); // Should output: "HELLO"
console.log(getSquare(4)); // Should output: 16
console.log(createFullName("John", "Doe")); // Should output: "John Doe"
console.log(calculateVolume(2, 3, 4)); // Should output: 24
console.log(checkAge(25)); // Should output: "Adult"
console.log(checkAge(16)); // Should output: "Minor"
console.log(getFirstElement([1, 2, 3, 4])); // Should output: 1
console.log(calculateAverage(85, 92, 78)); // Should output: 85
console.log(evaluateScores(95, 87, 92)); // Should output: "Excellent work! Top score: 95"
console.log(evaluateScores(75, 68, 82)); // Should output: "Good job! Top score: 82"
console.log(calculateSalePrice("Laptop", 100)); // Should output: "Product: Laptop - Sale Price: $80"
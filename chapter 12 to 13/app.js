// Take character input from user
// let char = prompt("Enter a single character:");

// Get ASCII code of the character
// let ascii = char.charCodeAt(0);

// Check the type of character
// if (ascii >= 48 && ascii <= 57) {
//     alert("The character is a Number");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     alert("The character is an Uppercase Letter");
// }
// else if (ascii >= 97 && ascii <= 122) {
//     alert("The character is a Lowercase Letter");
// }
// else {
//     alert("The character is a special symbol or not valid");
// }


// Take input from user
// let num1 = parseInt(prompt("Enter the first integer:"));
// let num2 = parseInt(prompt("Enter the second integer:"));

// Compare numbers
// if (num1 > num2) {
//     alert("The larger number is: " + num1);
// }
// else if (num2 > num1) {
//     alert("The larger number is: " + num2);
// }
// else {
//     alert("Both numbers are equal");
// }

// Take input from user
// let num = parseFloat(prompt("Enter a number:"));

// Check number type
// if (num > 0) {
//     alert("The number is Positive");
// }
// else if (num < 0) {
//     alert("The number is Negative");
// }
// else {
//     alert("The number is Zero");
// }

// Take character input from user
// let char = prompt("Enter a single character:").toLowerCase(); // convert to lowercase

// Check if it is a vowel
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     alert(true);  // It is a vowel
// } else {
//     alert(false); // Not a vowel
// }
// Store correct password
// let correctPassword = "ABC123"; // You can change this

// // Ask user to enter password
// let userPassword = prompt("Enter your password:");

// // Validate password
// if (userPassword === "" || userPassword === null) {
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);


// Take time input from user
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));

// Check the time ranges
if (time >= 0 && time < 1200) {
    alert("Good morning!");
} 
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} 
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} 
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} 
else {
    alert("Invalid time entered!");
}


"use strict";
// //Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Explain & TIP: Save a name in a variable. Show it in all small letters, ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style.
const person_name = "HUMA Mohsin";
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());

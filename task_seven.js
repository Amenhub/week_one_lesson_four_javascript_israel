// FUNCTION

// Declaring a variable outside the function (global scope)
let outsideVar = "I am global!";

function testScope() {
  // Declare a variable inside the function (local scope)
  let insideVar = "I am local!";
  
  // To access the variable declared outside the function
  console.log(outsideVar);
  
  // Access the variable declared inside the function
  console.log(insideVar); 
}

testScope();

// Try to access the variable declared inside the function
console.log(insideVar); 
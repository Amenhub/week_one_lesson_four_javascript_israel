// FUNCTION

// Creating a function that returns another function
function outerFunction() {
    let outerVariable = "I am from the global function!";
  
    // Inner function that has access to outerVariable
    return function innerFunction() {
      console.log(outerVariable); 
    };
  }
  
  // Calling the outer function and store the returned inner function in a variable
  const storedInnerFunction = outerFunction();
  
  // Calling the inner function
  storedInnerFunction(); 
  
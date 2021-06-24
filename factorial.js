// =======================================================================================
// Write a function that prints the factorial of a given number using recursion
// =======================================================================================

// Steps

// Create a function that accepts a number
function factorial(num){
    // Check if number is equals to 1
    if(num === 1) return 1;
    // add the squared of the numbers and 
    return num *  factorial(num - 1);
}

console.log(factorial(5));
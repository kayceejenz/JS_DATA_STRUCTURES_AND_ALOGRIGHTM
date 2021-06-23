// ===================================================================
// Write a function that can return the count of each char in a string
// ===================================================================

// Steps
// First one : Create a function that accepts a string
function countChar(str){
    // create a object for the output
    let obj = {};
    // remove all whitespace in the string
    str = str.replace(/ /g,'');
    // loop through the string
    for(var char of str){
        // check if char is in the string and increment count
        obj[char] = ++obj[char] || 1;
    }
    // return the object
    return obj;
}
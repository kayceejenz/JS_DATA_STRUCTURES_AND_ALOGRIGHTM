
// ======================================================================================================
// Solving problems using frequency counters
// Given two strings, write a function to determine if the second string is an anagram of the first
// ======================================================================================================

// Steps
// Create a function that accepts two strings
function checkAnagram(str1, str2){

    // Check if the length of the two array is the samey
    if(str1.length !== str2.length){
        return false;
    }

// create two object frequencies
    let strFrequency1 = {};
    let strFrequency2 = {};

    // loop through each of the two string respectively and add their count to their objects
    for(let char of str1){
        strFrequency1[char] = ++strFrequency1[char] || 1;
    }
    for(let char of str2){
        strFrequency2[char] = ++strFrequency2[char] || 1;
    }
     console.log(strFrequency1);
     console.log(strFrequency2);
    // compare the two objects with occupiance of the frequencies
    for(let key in strFrequency1){
        if(strFrequency2[key] !== strFrequency1[key]){
            return false;
        }
    }
    // return either true or false
    return true;
}

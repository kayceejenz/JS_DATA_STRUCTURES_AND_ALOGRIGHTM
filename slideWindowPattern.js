 // =========================================================================================================
 // Write a function that get the highest of three function in an array
 // =========================================================================================================

 // Steps

 // Create a function that accepts an array and number of range to calculate
 function getHighestOfRangeOfNumbers(arr,numOfRange){
    // declare two variable for holding the sum of initial sum and the continuing sum of numbers
    let maxSum = 0;
    let tempSum = 0;

     // check if the number of range is not more than the array
    if(numOfRange > arr.length) return;
     // loop and add the first sum of the numbers in the array from the range of number inputted
     for(let i = 0; i < numOfRange ; i++){
        maxSum += arr[i];
     }
     tempSum = maxSum;

      // loop the entire array and subtract the last of the range of number add and add the next number after the range of number added
      for(let i = numOfRange; i < arr.length; i++){
          tempSum = tempSum - arr[i - numOfRange] + arr[i];
          maxSum = Math.max(maxSum,tempSum);
      }
       // return the highest sum
       return maxSum;
 }

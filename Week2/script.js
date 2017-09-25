            //####  1  ####
console.log("\t#### 1 ####\n"); 
/* Write a function that takes 4 arguments.
A start value
An end value
A callback to call if the number is divisible by 3
A callback to use if the number is divisible by 5
The function should generate an array containing values from start value to end value
Then the function should iterate over the array and call the second argument if the 
array value is divisible by 3
The function should call the second argument if the array value is divisible by 5
Both functions should be called if the array value is divisible by both 3 and 5*/

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
   // make array 
    let arrayContainer = [];
    for(let i = startIndex; i<=stopIndex; i++){
        arrayContainer.push(i);
    }
   // start at beginning of array and check if you should call threeCallback or 
   // fiveCallback or go on to next 
    for(let j = 0; j < arrayContainer.length; j++){
        arrayContainer[j]%3 == 0 ? threeCallback(): true;
        arrayContainer[j]%5 == 0 ? fiveCallback(): true;  
    }
}
function sayThree(){console.log("3 CALLED!")}
function sayFive(){console.log("5 CALLED!")}

threeFive(10, 15, sayThree, sayFive);
// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive  


            //####  2,3  ####
console.log("\t#### 2,3 ####\n"); 
/* Repeat a given string (first argument) num times (second argument). Return an empty 
   string if num is not a positive number.  FOR LOOP */

function repeatStringNumTimes(str, num) {
  
  let newStr = "";
  for(let i = 0; i<num; i++){
    newStr += str;
  }
  return newStr;
}

console.log(repeatStringNumTimes(" for loop ||", 3));

            //####  4  ####
console.log("\t#### 4 ####\n"); 
/* Repeat a given string (first argument) num times (second argument). Return an empty
   string if num is not a positive number.  WHILE LOOP */


function repeatStringNumTimes(str, num) {
  
 let newStr = "";
 let i = 0; 
 while(i<num){
    newStr += str;
    i++
  }
  return newStr;
}

console.log(repeatStringNumTimes(" while loop ||", 3));


            //####  5  ####
console.log("\t#### 5 ####\n"); 
/* Repeat a given string (first argument) num times (second argument). Return an empty 
   string if num is not a positive number. DO WHILE LOOP */


function repeatStringNumTimes(str, num) {
  
 let newStr = "";
 let i = 0;
 do{  
   num > 0 ? newStr += str : false;
   i++;
 } 
 while(i<num)
 return newStr;
}

console.log(repeatStringNumTimes(" do-while loop ||", 3));

            //####  6  ####
console.log("\t#### 6 ####\n"); 
/* Have your MotorBike constructor describe an object with wheels, engines and seats 
   properties and set them to numbers. */

var MotorBike = function() {
  this.wheels = 2;
  this.engines = 1;
  this.seats = 2;
};

            //####  7  ####
console.log("\t#### 7 ####\n"); 
/* Modify function multiplyAll so that it multiplies the product variable by each number
   in the sub-arrays of arr*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
   product *= arr[i][j];
  }}
  // Only change code above this line
  return product;
}

// Modify values below to test your code
console.log("Result is : " + multiplyAll([[1,2],[3,4],[5,6,7]]));

            //####  8  ####
console.log("\t#### 8 ####\n"); 
/* We did some work with arrays - var arr = [1,2,3] We can also nest arrays inside arrays 
   like this var arr2d = [[1,2], [3,4], [5,6]] (for math people you can think of this as a matrix) 
   How would you print all the items of an array with 3 dimensions? How about with K dimensions? 
   What if you didn't know how deep the array was nested? (You don't have to write code for this 
   but think about it)*/


            //####  9  ####
console.log("\t#### 9 ####\n"); 
/* Here are two functions that look like they do the something similar but they print different 
   results. Please explain what's going on here.*/

var x = 9; 
function f1(val) { 
    val = val+1; 
    return val;
}
f1(x);
console.log(x);
f1(x);
console.log(x);

var y = { x: 9 };
function f2(val){
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y.x);
f2(y);
console.log(y.x);

/* if you pass an object to a function, the "value" is really a reference to that object, so the 
   function can modify that object's properties but not cause the variable outside the function to 
   point to some other object. */




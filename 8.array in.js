//array

const nums = [2, 3,4,5,7,7,9];
// console.log(nums.indexOf(7));  
console.log(nums.indexOf(70));  // 70 was not found in the const nums,so it shows (-1)

nums.push("pranaykargam");//it will add at end in array
console.log(nums);

nums.unshift();  //when we use it ,it will comes in first like(5)...then 5 will come first in the array
console.log(nums);

nums.pop();   // it will remove the last num,name...etc
console.log(nums);

nums.shift();  // remove the first element of array  
console.log(nums);

nums.sort(); //arrange in order wise numbers,words..etc
console.log(nums);

const subArray = nums.slice(2,5); //select the part of an array and return the new array 
console.log(subArray);
















// const words = ["DHONI", "VIRAT", "ROHITH", 12 , true];
// console.log(words[3]);

// {
//     Nam :"pranay"
// }
// function hello(){
//     console.log("hello world")
// }

// console.log(words.length);









// // print 1 to 10 
// function print1to10(num){
//     for(i=1;i<=num;i++){
//         console.log("The output is :",i);  
//     }
// }
// print1to10(10)
// // Count how many times 3 appears in [1,3,4,3,5,3]
// function howMany(arr){
//     let count=0;
//     for(i=0;i<=arr.length;i++){
//         if(arr[i]===3){
//             count++
//         }
//     }
//     return count;
// }
// console.log("There are totaly :"+howMany([1,3,4,3,5,3])+"s");
// // Reverse the array [10, 20, 30].
// function reverse(arr){
//     let reversed=[];
//     for(i=arr.length-1;i>=0;i--){
//         reversed.push(arr[i])
        
//     }
//     return reversed;
    
// }
// console.log("The Reversed Array is:",reverse([10,20,30]));
// // Check if a number is positive or negative.
// function posOrneg(num){
// if(num>=0){
//     console.log("This number is Positive");
    
// }
// else{
//     console.log("This number is Negative");
    
// }
// }
// posOrneg(89)
// posOrneg(-9)
// posOrneg(0)
// // Find the sum of [2, 4, 6]
// function findSum(arr){
// let count=0;
// for(i=0;i<arr.length;i++){
//     count=count+arr[i];
// }
// return count;
// }
// console.log("The sum of the array is:",findSum([2,4,6]));
// // Check if "a" is a vowel or consonant.
// function checkVowel(str){
// if(str=="a" || str=="e" || str=="i" || str=="o" || str=="u"){
//     console.log("This letter is a vowel");
    
// }
// else{
//     console.log("This letter is no a vowel");
    
// }
// }
// checkVowel("a")
// checkVowel("w")
// checkVowel("e")
// // Count how many numbers are in [4, 6, 8, 10].
// function countNumbers(arr){
//     let value=[];
//     for(i=0;i<arr.length;i++){
//         value++
//     }
//     return value
// }
// console.log("There are totally "+countNumbers([4,6,8,10])+"numbers");
// // Find the largest number in [3, 7, 1].
// function findLargest(arr){
//     let large=arr[0];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>large){
//             large=arr[i];
            
//         }
//     }
//     return large;
// }
// console.log("The largest number is:"+findLargest([3,7,1]));
// // Add 5 to each element of [1, 2, 3].
// function sum(arr){
//     let sums=[];
// for(i=0;i<arr.length;i++){
//     sums.push(arr[i]+5)
// }
// return sums;
// }
// console.log("The output is :"+sum([1,2,3]));
// // Reverse the string "hello".
// function reverseString(str){
//     let reversed="";
// for(i=str.length-1;i>=0;i--){
//     reversed=reversed+str[i];
// }
// return reversed;
// }
// console.log("The reverse output is:"+reverseString("hello"));
// // Count how many even numbers are in [1,2,3,4,5,6].
// function howMany(arr){
//     let counted=[];
//     for(i=0;i<=arr.length;i++){
//         if(arr[i]%2==0){
//             counted++
//         }
//     }
//     return counted;

// }
// console.log("There are totally "+howMany([1,2,3,4,5,6])+" even numbers");
// // Check if 10 is divisible by 5.
// function checkDiv(n){
//     if(n%5===0){
//         console.log("divisible by 5");
        
//     }
//     else{
//         console.log("not divisible by 5");
        
//     }
// }
// checkDiv(10)
// // my own question check whether what numbers from this array can divisible by 5 if divisible add the sum 
// function divBy5(arr){
//     let divNum=[];
//     for(i=0;i<=arr.length;i++){
//         if(arr[i]%5===0){
//             divNum++
//         }
//     }
//     return divNum;
// }
// console.log("There are totally "+divBy5([1,34,2,5,67,990,332,689,300,56,75])+" numbers that are divisible by 5");
// // Find the smallest number in [12, 4, 6].
// function findSmallNumber(arr){
//     let smaller=arr[0];
//     for(i=0;i<=arr.length;i++){
//         if(smaller>arr[i]){
//             smaller=arr[i];
//         }
//     }
//     return smaller;
// }
// console.log("The smallest Number is :"+findSmallNumber([12,4,6]));
// // Count how many properties are in { a:1, b:2, c:3 }.
// function howMany(obj){
//     let val=0;
//     for(let key in obj){
//         val++
//     }
//     return val;
// }
// console.log("there are totally "+howMany({a:1,b:2,c:3})+"properties");
// // Create an array with only odd numbers from [1,2,3,4,5].
// function onlyOdd(arr){
//     let oddVal=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             oddVal.push(arr[i]);
//         }
//     }
//     return oddVal;
// }
// console.log(onlyOdd([1,2,3,4,5]));
// // find how many even numbers are there in the array using filter method
// let arrayy=[122,2,344,53,33,221,345,6777,889954,211,322,90];
// let anss=arrayy.filter((num)=>num%2==0);
// console.log(anss);










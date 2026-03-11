// print 1 to 10 
function print1to10(num){
    for(i=1;i<=num;i++){
        console.log("The output is :",i);  
    }
}
print1to10(10)
// Count how many times 3 appears in [1,3,4,3,5,3]
function howMany(arr){
    let count=0;
    for(i=0;i<=arr.length;i++){
        if(arr[i]===3){
            count++
        }
    }
    return count;
}
console.log("There are totaly :"+howMany([1,3,4,3,5,3])+"s");
// Reverse the array [10, 20, 30].
function reverse(arr){
    let reversed=[];
    for(i=arr.length-1;i>=0;i--){
        reversed.push(arr[i])
        
    }
    return reversed;
    
}
console.log("The Reversed Array is:",reverse([10,20,30]));
// Check if a number is positive or negative.
function posOrneg(num){
if(num>=0){
    console.log("This number is Positive");
    
}
else{
    console.log("This number is Negative");
    
}
}
posOrneg(89)
posOrneg(-9)
posOrneg(0)
// Find the sum of [2, 4, 6]
function findSum(arr){
let count=0;
for(i=0;i<arr.length;i++){
    count=count+arr[i];
}
return count;
}
console.log("The sum of the array is:",findSum([2,4,6]));
// Check if "a" is a vowel or consonant.
function checkVowel(str){
if(str=="a" || str=="e" || str=="i" || str=="o" || str=="u"){
    console.log("This letter is a vowel");
    
}
else{
    console.log("This letter is no a vowel");
    
}
}
checkVowel("a")
checkVowel("w")
checkVowel("e")
// Count how many numbers are in [4, 6, 8, 10].
function countNumbers(arr){
    let value=[];
    for(i=0;i<arr.length;i++){
        value++
    }
    return value
}
console.log("There are totally "+countNumbers([4,6,8,10])+"numbers");
// Find the largest number in [3, 7, 1].
function findLargest(arr){
    let large=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i];
            
        }
    }
    return large;
}
console.log("The largest number is:"+findLargest([3,7,1]));
// Add 5 to each element of [1, 2, 3].
function sum(arr){
    let sums=[];
for(i=0;i<arr.length;i++){
    sums.push(arr[i]+5)
}
return sums;
}
console.log("The output is :"+sum([1,2,3]));
// Reverse the string "hello".
function reverseString(str){
    let reversed="";
for(i=str.length-1;i>=0;i--){
    reversed=reversed+str[i];
}
return reversed;
}
console.log("The reverse output is:"+reverseString("hello"));




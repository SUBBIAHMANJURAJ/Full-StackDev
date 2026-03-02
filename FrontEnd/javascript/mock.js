// CONDTIONAL STATEMENTS
// 1. if statement
// 2. if else statement
// 3. nested if statement
// 4. switch statement

// 1. if statement
let a = 12;
if (a > 15) {

}
console.log("False")

let age = 20;
if (age > 18) {
    console.log("YOU ARE MAJOR");
}
// 2. if else statement

let number = 28;
if (number % 2 == 0) {
    console.log("even number");

}
else {
    console.log("odd number");

}
// 3. nested if statement

let ages = 52;
if (ages > 40) {
    if (ages < 45) {
        console.log("his age is between 40 to 45");

    }
    else {
        console.log("his age is above 50");

    }
}

let marks1 = 63;
if (marks1 > 60) {
    console.log("you are above 50%");
    if (marks1 < 50) {
        console.log("you are below 50%");

    }
    else {
        console.log("fail");

    }


}

let nums = -9;
if (nums < 0) {
    console.log("this is negative number");
    if (nums % 2 == 0) {
        console.log("this is even number");
    }
    else {
        console.log("this is odd number");

    }


}
else {
    console.log("this is poitive number");

}


// 4. else if statement

let age2 = 74;
let ticketPrice = age2 <= 12 ? console.log("price is $5") : age2 >= 13 && age2<= 17 ? console.log("price is $10") : age2 >= 18 && age2 <= 59 ? console.log("price is $20") : console.log("Senior discount price is $15");

function shopping(price){
    if (price >= 100){
        console.log("You got 20% of discount");
        
    }
    else if(price >=50 && price <=99){
        console.log("You got 10% of discount");
        
    }

    else if(price >=25 && price <=49){
        console.log("You got 5% of discount");
        
    }
    else{
        console.log("No discount is available");
        
    }
    

}
shopping(120);
shopping(80);
shopping(30);
shopping(10);

// 2.LOOPS CONCEPT
// 2.1 For loop
// 2.2 while loop
// 2.3 Do while loop
// 2.4 for in loop
// 2.5 for of loop
// 2.6 for each loop
// Break and continue statement

// 2.1 For loop
// print numbers from 0 to 10
for(let i=0;i<=10;i++){

console.log(i);

}

// print numbers from 0 to 30 which are odd
for(let i=0;i<=30;i++){
    if(i%2!=0){
        console.log(i);
        
    }
}

// print numbers from 0 to 30 which are even
for(let i=0;i<=30;i++){
    if(i%2===0){
        
        console.log(i);
    }
}

//  print array Element
let name=["sara","mohamed","ali","hassan"];
for(let i=0;i<name.length;i++){
    console.log(name[i]);
    
}

// find factorial of a number
let num =1;
for(let i=1;i<=6;i++){
    num=num*i
}
console.log(num);

// find how many even numbers are available
let count=0;
for(let i=0;i<=30;i++){
    if(i%2===0){
        count++;
    }
}
console.log(count);

// reverse an array
let arr1=[5,4,3,2,1];
arr1.reverse();
console.log(arr1);

// complex method 
let val=[0,9,8,7,6,5,4,3,2,1];
let reverseVal=[];
for(let i=val.length-1;i>=0;i--){
    reverseVal.push(val[i]);
}
console.log(reverseVal);

let arr2=[20,34,54,22,89,90,100,36];
let count1=0;
for(let i=0;i<arr2.length;i++){
    if(arr2[i]>30){
        count1++;
    }
}
console.log(count1);

function countNumbers(arrr){
    let count1=0;
    for(let i=onabort;i<arrr.length;i++){
        if(arrr[i]>26){
            count1++;
        }
    }
    console.log(count1);
}
countNumbers([20,34,54,22,89,90,100,36]);

// FOR OF LOOPS

let namees=["john",  "michael", "sarah", "emily"];
for(name of namees)
{
    console.log(namees);
    
}

// FOR IN LOOPS
let person={
    name:"john",
    age:30,
    city:"new york",
    address:{
        street:"main street",
        number:123
    }
}
for (key in person){
    console.log(key + ":" + person[key]);
    
}

// SWITCH STATEMENT TRAFFIC SIGNAL

let signal="green";
switch(signal){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("be ready");
        break;
    case "green":
        console.log("goooooo!!!");
        break;
    default:
        console.log("Invalid signal");
        
        
        
}

// CALL BACK FUNCTION

let numberss=[1,2,3,4,5];
let result = numberss.map(function(num){
    return num * 2;
});

console.log(result);

let numss=[2,3,4,5,6,7];
let ans=numss.map(function(num){
    return num + 5;
});
console.log(ans);

function calSub(value){
    let finalResult=value.map(function(val){
        return val - 5;
    })
    console.log(finalResult);
    
}
calSub([10,20,30,40,50]);









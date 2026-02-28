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







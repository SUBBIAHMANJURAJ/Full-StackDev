function testVar(){
    if (true){
        let y=10;
        console.log(y);
    }
    
}
testVar();
// function timeout(){
//     for(let i=0;i<3;i++){
//         setTimeout(function()
//     {
//         console.log(i);
        
//     },1000)
//     }
// }
// timeout()

const arr=[1,2,3];
arr.push(4);//Allowed
console.log(arr);


const obj={name:"Hendry"};
obj.name="Ram";//Allowed
console.log(obj)


function addNumbers(a,b){
    let sum=a+b;
    return sum;
}
let result=addNumbers(10,19)
console.log("sum is",result);

// check even or odd using arrow function
// factorial of Number
// maximum of two numbers
// minimum of two numbers
// reverse a String
// check pallydrom
// square of number
// cube of number
// celcious to farred heat
// find the length of String
// count vowels in the String
// do with and without arrow function

let numbers=[1,2,3]
let sum=0;
for(let num of numbers){
    sum+=num
}
console.log("sum",sum);

let num=[10,20,30,40,50]
let min=num[0]
for (let n of num){
    if(n<min){
        min=n;
    }
}
console.log("min",min);

// filter method used to check even numbers 
let arr3=[39,,45,22,456,78,2211,233,44,98]
let even=arr3.filter(n=>n%2===0)
console.log("even numbers is :",even);

// map method used to multiply numbers  map return a new value
let arr4=[1,2,4,5,6,8,9,0,12]
let mul=arr4.map(n=>n*2)
console.log(mul);


let arr5=[1,2,3,4,5];
let multi=arr5.map(n=>n*2)
let final=multi.filter(n=>n>5)
console.log(final);

// map and filter
// sum of positive numbers [1,-2,3,-4,-5]
// double the numbers and find the maximum value in the array
// remove duplecates using filter
// multiply odd numbers and return a new array
// check even or odd using arrow function
function checkOddorEven(a){
    if(a %2===0){
        console.log("even number");   
    }
    else{
        console.log("odd number");
        
    }
}
checkOddorEven(18)

// with arrow function 

const CheckOddorEvens = num => num%2===0 ? "even" : "odd";
console.log(CheckOddorEvens(5))

// factorial of Number
function factorial(n){
    let result=1;
    for(i=1;i<=n;i++){
        result=result*i;
    }
    return result
}
console.log(factorial(5))

// maximum numbers 
function findMax(n){
let max=n[0];
for(let num of n){
    if(num > max){
        max=num;
    }
}
console.log("The Max number is :",max)
}
findMax([10,2,4,556,88,869])

// find minimum numbers 
function findMinNumber(n){
let min=n[0];
for(let num of n){
    if(num<min){
        min=num;
    }
}
console.log("the minimum number is:",min)
}
findMinNumber([122,57,9,7,5,54,4,322,1,344,2,44])

// reverse a String
let str="hello"
let reversed=""
for(let i=str.length-1;i>=0;i--){
    reversed+=str[i]
    
}
console.log(reversed)


// check pallydrom
const checkPalindrome = string => {
    let currentString = string
    console.log(currentString)
    let splitedVal = string.split("").reverse().join("")
    if(currentString === splitedVal) {
        console.log(true)
    }
    else{
        console.log(false)
    }
}
checkPalindrome("madam")

// square of number
function squareNum(n){
    let result=[]
    for(let num of n){
        result.push(num*num)
    }
    return result
}
console.log(squareNum([2,3,4,6]))

// cube of number
function cubeNumbers(arr){
    let result=[];
    for(let num of arr){
        result.push(num*3)
    }
    return result
}
console.log(cubeNumbers([2,5,7,4,3,2]))

// celcious to farred heat
function celciousToFahreheit(c){
    return (c * 9/5)+32;
}
console.log("the celcious is:",celciousToFahreheit(30))

// farredheit to celcious 
function fahrenheitToCelsius(f){
    return (f - 32) * 5/9;
}
console.log("Farredheit is:",fahrenheitToCelsius(86))

// find the length of String
function findlength(str){
    let count=0;
    for(let checkPalindrome of str){
        count++
    }
    return count;
}
console.log(findlength("spartanmanju"))

// count vowels in the String
function countVowels(char){
let count=0;
for(let n of char){
    if(n==="a"||n==="e"||n==="i"||n==="o"||n==="u"){
        count++
    }
}
    return count;
}
console.log("there are totally :",countVowels("ajkwkaklwoiouses"),"vowels")

// sum of positive numbers [1,-2,3,-4,-5]
let arr6=[1,-2,3,-4,-5]
arr6.filter(n=>n>0)
.map(num=>num*num)

// check palindrome 
function isPalindrome(str){
    let reversed = str.split("").reverse().join("")
    if(str === reversed){
        return str + " is a Palindrome";
    }
    else{
        return str + " is Not a Palindrome"
    }
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))

function countHowManyEven(arr){
    let count=0;
    for(let array of arr){
        if(array%2===0){
            count++
        }
    }
    return count;
}
console.log("There are totally",countHowManyEven([1,3,6,8,10,11]),"even numbers")

// ARRAY OF OBJECTS
const users=[
    {id:1,name:"John",age:12},
    {id:2,name:"Alice",age:15}
];
// ACCESSING DATA 
console.log(users[0])
console.log(users[0].name)
// LOOPING THROUGH ARRAY OF OBJECTS
users.forEach(user=>{
    console.log(user.name)
})
// FILTERINNG
const adult=users.filter(user=>user.age>=14)
console.log(adult);
// SORT BY AGE 
users.sort((a,b)=>a.age-b.age);
console.log(users)//ascending order
users.sort((a,b)=>b.age-a.age);
console.log(users)//decending order

// PROMISE 
const myPromise=new Promise((resolve,reject)=>
{
    let success=true;
    if(success){
        resolve("Data Received")
    }
    else{
        reject("Error Occured")
    }
})

// displaying .then,.catch 
myPromise.then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})

function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Data Loaded")
        })
    })
}

// ARRAY METHODS 
// Double all the numbers 
let double=[1,2,3,4,5]
let output=double.map(n=>n*2)
console.log(output);

// GET ONLY EVEN NUMBERS 
let evenNum=[1,2,3,4,5,6,7,8]
let evenres=evenNum.filter(n=>n%2==0)
console.log(evenres)

// SUM OF ALL NUMBERS 
let allNumbers=[1,2,3,4]
let sums=allNumbers.reduce((acc,n)=>acc+n);
console.log(sums)

const mypromise=new Promise((resolve,reject)=>{
    let result =true;
    if(result){
        console.log("Received")
    }
    else{
        console.log("Error")
    }
})
mypromise.then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
}).finally("Haiiii")

async function fetchData(){
    let result = await getData();
    console.log(result)
}
fetchData()






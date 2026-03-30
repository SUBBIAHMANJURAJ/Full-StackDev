function testVar(){
    if (true){
        let y=10;
        console.log(y);
    }
    
}
testVar();
function timeout(){
    for(let i=0;i<3;i++){
        setTimeout(function()
    {
        console.log(i);
        
    },1000)
    }
}
timeout()

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


let user=[{name:"John",age:22,gender:"Male"},{name:"Preethi",age:21,gender:"Female"}]
user.forEach(user=>console.log(user.name))
console.log(user[0]);

// check even or odd using arrow function
function checkOddorEven(){

}
checkOddorEven()




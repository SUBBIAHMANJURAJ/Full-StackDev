// To find the reverse array 
function reverseArray(value){
    let rev=[];
    for(let i=value.length-1;i>=0;i--){
        rev.push(value[i])
    }
    console.log(rev);
    
}
reverseArray([1,2,3,4,5]);

// To find the sum of array element

function sumOfarray(sum){
    let count=0;
    for(i=0;i<sum.length;i++){
        count+=sum[i];
    }
    console.log(count);
    
}
sumOfarray([1,2,3,4,5,6,7,8])

// check this number is positive or negative

function postiveorNegative(sum){
    if(sum>=0){
        console.log("Positive Number");
        
    }
    else{
        console.log("Negative Number");
        
    }
}
postiveorNegative(-5)
postiveorNegative(5)
postiveorNegative(0)

// Print n to 1 concept

function printNto1(n){
    for(i=n;i>=1;i--){
        console.log(i);
        
    }
}
printNto1(9)

// Print the largest number in the array 
function largestNumber(big){
    let max=big[0];
    for(i=0;i<big.length;i++){
        if(big[i]>max){
            max=big[i];
        }
    }
    console.log("the largest number is :" + max);
}
largestNumber([1,2,3,4,5,6,7,8,9])

// object changer 

let details={
    name:"Ravi",
    city:"chennai",
    age:25
} 
function changeCity(changeCity, changeAge,changeName){
    details.city=changeCity;
    details.age=changeAge;
    details.name=changeName;
    console.log(details);
}
changeCity("Tirunelveli", 23,"Manjuraj")

// signal color question
function colors(color){
    if(color=="red"){
        console.log("Stop !");
        
    }
    else if(color=="yellow"){
        console.log("be ready (*-*)");
    }
    else if(color=="green"){
        console.log("go -->");
        
    }
    else{
        console.log("default color ?");
        
    }
}
colors("red")
colors("yellow")
colors("green")
colors("blue")

// Find even number of an array 
function findEven(even){
 let evenNum=[];
for(let i=0;i<even.length;i++){
    if(even[i]%2==0){
        evenNum.push(even[i])
    }
}
return evenNum;
}
console.log(findEven([1,2,3,4,5,6,7,8,9]));

function findOdd(odd){
let oddNum=[];
for(i=0;i<odd.length;i++){
    if(odd[i]%2!=0){
        oddNum.push(odd[i])
    }

}
return oddNum;
}
console.log(findOdd([1,2,3,4,5,6,7,8,9]));

// Find the smallest Number

function smallNumber(small){
let mini=[small[0]];
for(i=0;i<small.length;i++){
    if(small[i]<mini){
        mini=small[i]
    }
}
console.log("smallest number is:",mini);

}
smallNumber([5,2,9,1,3])

// print numbers from 10 to 1
function printNum(nums){
    for(i=nums;i>=1;i--){
        console.log(i);
        
    }
}
printNum(10)

// check if 10 is divisible by 5
function divisible(num){
    if(num%5===0){
        console.log("divisible by 5");
        
    }
    else{
        console.log("not divisible by 5");
        
    }
}
divisible(10)


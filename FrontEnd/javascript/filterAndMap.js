let arr=[2,3,4,5,6,7,8,9,10]
let result=arr.filter((x)=>x>6)
.map((y)=>y*2)
console.log("result:",result);


let num=[1,2,3,4,5,6,7,8,9,10]
let res=num.filter((x)=>x>4)
.map((y)=>y%2==0)
console.log("answer:",res);

// REDUCE

let array=[3,4]
let sumofArray=array.reduce((acc,element)=>acc*element)
console.log(sumofArray);
let avg=sumofArray/array.length
console.log("avg:",avg)

// INDEX FINDER

let fruits=["apple","banana","mango","orange"]
console.log(fruits.indexOf("mango"));
console.log(fruits.includes("apple"));
console.log(fruits.includes("cherry"));
    
if(!fruits.includes("cherry")){
fruits.push("cherry")
}
console.log(fruits);







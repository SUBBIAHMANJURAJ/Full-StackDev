// IF ELSE CONDITION 

let btn=document.getElementById("btn");
// btn.addEventListener("click",(e)=>{
//     if(btn.innerHTML==="click me"){
//         btn.innerHTML="clicked ";
//         btn.style.backgroundColor="";
//     }
//     else{
//         btn.innerHTML="click me";
//         btn.style.backgroundColor="";
//     }
// })

// HOVER EFFECT
// let intro=document.getElementById("intro")

// intro.addEventListener("mouseover",(e)=>{
//     intro.style.color="black";
//     intro.style.cursor="pointer";
//     intro.innerHTML="Welcome to dom manupulation";
// })
// intro.addEventListener("mouseout",(e)=>{
//     intro.style.color="black";
//     intro.style.cursor="default";
//     intro.innerHTML="My name is manju raj"
// })

const sayhello=()=>{
    alert("you added me")
}
const saybye=()=>{
    alert("please enter the input correctly")
}

const form=document.getElementById("form");
console.log(form)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e.target.emailDetail.value);
    console.log(e.target.passDetail.value);
    alert(`your email is:  ${e.target.emailDetail.value} and your password is:  ${e.target.passDetail.value}`)
})

// merge and spread operators
let a=[2,3,4,5,6]
let b=[7,8,9]
let c=[...a,...b]
console.log(c);


let student={
    name: "john",
    age:23,
    role:"full stack Developer"
}
let updatedStudent={
    ...student,
    marks: 450
}


let [first,...otherElement]=a

console.log(first,"a-first");
console.log(otherElement,"a-otherElement");




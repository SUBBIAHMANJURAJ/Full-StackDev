const display=document.getElementById('display')
const btn1=document.getElementById('btn1')
const btn2=document.getElementById('btn2')
let count=0;
// let timer=setInterval(() => {
//     display.innerText=count;
//     count++
//     if(count>15){
//         clearInterval(timer)
//     }
// }, 500);

btn1.addEventListener('click',()=>{
count++;
display.innerText=count;
display.style.color="green"
})

btn2.addEventListener('click',()=>{
    count--;
display.innerText=count;
display.style.color ="black"
})
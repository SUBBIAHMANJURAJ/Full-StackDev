const countElement=document.getElementById('count')
const button1=document.querySelector('.btn1')
let count=0;
button1.onclick=()=>{
    count ++;
    countElement.textContent=count;
}
const button2=document.querySelector('.btn2')
button2.onclick=()=>{
    count--;
    countElement.textContent=count;
}
const resetButton=document.querySelector('.resBtn')
resetButton.onclick=()=>{
    count=0;
    countElement.textContent=count;
}
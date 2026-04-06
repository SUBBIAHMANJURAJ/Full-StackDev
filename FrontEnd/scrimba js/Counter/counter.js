const countElement=document.getElementById('count')
const button1=document.querySelector('.btn1')
const button2=document.querySelector('.btn2')
const resetButton=document.querySelector('.resBtn')
let count=0;
button1.onclick=()=>{
    count ++;
    countElement.textContent=count;
    
}
button2.onclick=()=>{
    count--;
    countElement.textContent=count;
}
resetButton.onclick=()=>{
    count=0;
    countElement.textContent=count;
}
 

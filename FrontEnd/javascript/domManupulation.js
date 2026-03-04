let btn=document.getElementById("btn");
btn.addEventListener("click",(e)=>{
    if(btn.innerHTML==="click me"){
        btn.innerHTML="clicked ";
        btn.style.backgroundColor="green";
    }
    else{
        btn.innerHTML="click me";
        btn.style.backgroundColor="";
    }
})

let intro=document.getElementById("intro")

intro.addEventListener("mouseover",(e)=>{
    intro.style.color="black";
    intro.style.cursor="pointer";
    intro.innerHTML="Welcome to dom manupulation";
})
intro.addEventListener("mouseout",(e)=>{
    intro.style.color="black";
    intro.style.cursor="default";
    intro.innerHTML="My name is manju raj"
})



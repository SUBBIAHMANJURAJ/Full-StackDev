const Idelement=document.getElementById("heading");
const Classelement=document.getElementsByClassName("para");
const imgelement=document.getElementsByClassName("img")
console.log("element:",Idelement);
console.log("element1:",Classelement);
console.log("imgelement:",imgelement);



let idQuery=document.querySelector("#heading");
let classQuery=document.querySelector(".para")
let classQueryAll=document.querySelectorAll(".para")
console.log("idQuerry:",idQuery);
console.log("classQuery:",classQuery);
console.log("classQueryAll:",classQueryAll);

document.querySelector(".container").innerHTML="<h1>Hellllllllooooooo</h1>"


Idelement.style.color="brown";
Classelement[0].style.color="blue";
Classelement[0].style.background="yellow";

Idelement.textContent="Welcome to DOM Manipulation";









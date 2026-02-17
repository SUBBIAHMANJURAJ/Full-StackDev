// IF ELSE
let name="Manjuraj";
let age =20;
if(age>=18){
    console.log(name,"is eligible to vote");
    
}
else{
    console.log(name,"is not eligible to vote");
    
}

// ELSEIF LADDER

let marks =prompt("Enter your Test Marks");
marks = Number(marks);
if (marks>=90 && marks<=100) {
    console.log("Grade A");   
}
else if(marks>=80  && marks<90){
    console.log("Grade B");
}
else if(marks>=50 && marks<80){
    console.log("Grade C");   
}
else if(marks>=35 && marks<50){
    console.log("Grade D");   
}
else{
    console.log("Fail");
 
}
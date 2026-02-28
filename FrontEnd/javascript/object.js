const person1={
    name:"Manju raj",
    age:22,
    location:"Tirunelveli",
    address:"222/2 North Street Parappadi",
}
console.log(person1);
console.log(person1.address);
console.log(person1.name);

const Person2={
    name:"Gowtham",
    age:"32",
    role:"Full Stack Developer",
    companyName:"Zoho",
    
}
console.log(Person2);
delete Person2.age
console.log(Person2); 


// FOR IN METHOD
 
for (let key in Person2){
    console.log(key +":"+" "+Person2[key]);
    
}

// METHODS

const student ={
    name:"John",
    mark:57,
    msg : function(){
        console.log("Hello your name is "+student.name);
        
    }
}
student.msg()

let arr=[1,2,3,4,5,6,7];
let result=arr.map((value,index)=> value*2)
console.log(result);



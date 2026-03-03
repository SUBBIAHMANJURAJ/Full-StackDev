// Create an object book with keys: title, author, and pages.
//  Print the author name using both dot and bracket notation.
 let books={
    Title:"Harry Pottor",
    Author:"J.K. Rowling",
    pages:132
}
console.log(books.Author);

// Create an object user with properties name and age.
//  Add a new property email and update the age.
let user={
    name:"john",
    age:32,
}
console.log(user);
user.email="john@gmail.com"
user.age=35
console.log(user);

// Create an object student with 3 subjects and marks.
//  Loop through and print each subject with its mark.
let student = {
    science: 45,
    math: 33,
    english: 98,
    social: 76,
};

for (const subject in student) {
    console.log(subject + " : " + student[subject]);
}

// Create an object calculator with methods:
// add(a,b) → returns sum
// sub(a,b) → returns difference
//  Call both methods and print results.
let calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(c,d){
        return c-d;
    }
};
console.log(calculator.add(8,9));
console.log(calculator.sub(7,6));

// Create an object employee with properties name and salary.
let employee={
    name:"Mathew",
    salary:23000,
    deatils:function() {
        console.log("Name"+":"+this.name +" "+"salary:"+this.salary);
        
        
    }
}
employee.deatils()

// Create an object mobile and print all its keys and values using built-in methods.
let mobile={
    brand:"samsung",
    model:"s20",
    price:45000
}
console.log(Object.keys(mobile));
console.log(Object.values(mobile));

let laptops={
    brand: "dell",
    price: 500000,
    model:"2026",
    color:"white"
}
console.log(Object.keys(laptops));
console.log(Object.values(laptops));


// Create an object student with nested details

let stuDetails={
    name:"Kavi",
    marks:{
        maths:80,
        science:90,
    }
}
console.log("Science mark is:",stuDetails.marks.science);






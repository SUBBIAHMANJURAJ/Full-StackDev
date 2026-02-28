let books={
    Title:"Harry Pottor",
    Author:"J.K. Rowling",
    pages:132
}
console.log(books.Author);

let user={
    name:"john",
    age:32,
}
console.log(user);
user.email="john@gmail.com"
user.age=35
console.log(user);

let student = {
    science: 45,
    math: 33,
    english: 98,
    social: 76,
};

for (const subject in student) {
    console.log(subject + " : " + student[subject]);
}

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

let employee={
    name:"Mathew",
    salary:23000,
    deatils:function() {
        console.log("Name"+":"+this.name +" "+"salary:"+this.salary);
        
        
    }
}
employee.deatils()



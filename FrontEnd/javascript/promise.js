function sum(a,b){
    return total=a+b
}
sum(1,2);
sum(3,78);

let i = new Promise((resolve,reject)=>{
    let islogin=true;
    if(islogin){
        resolve("you are logged in")
    }
    else{
        reject("failed")
    }
    
})
i.then((data)=>{
    console.log(data)
    
})
.catch((error)=>{
    console.log(error)
})

// setInterval(() => {
//     setTimeout(() => {
//     console.log("Start");

//     setTimeout(() => {
//         console.log("End");

//         setTimeout(() => {
//             console.log("Your task is completed");
//         }, 2000);

//     }, 1000);

// }, 2000);
// }, 3000);
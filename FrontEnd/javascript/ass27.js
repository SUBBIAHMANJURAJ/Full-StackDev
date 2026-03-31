console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 0);

console.log("End");

// PRINT USER FOUND IN 2SECS 
console.log("Checking user...");

setTimeout(() => {
  console.log("User found");
}, 2000);

console.log("Loading dashboard...");

// TIME UP IN 5Sec
setTimeout(() => {
  console.log("Time's up!");
}, 5000);

// PRINT NUMBERS AFTER A DELAY 
for(let i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}

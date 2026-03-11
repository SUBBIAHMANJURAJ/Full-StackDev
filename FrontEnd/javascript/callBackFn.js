// CALL BACJK FUNCTION
function parent(name,callback){

    callback(name)
}
let greet=(userName)=>{
    console.log(`Welcome ${userName}`);
    
}
parent("manu",greet)

// setInterval, setTimeout AND clearInterval
// let count=10;
// ;let countdown=setInterval(()=>{
//     console.log(count);
//     count--
//     if(count<0){
//         clearInterval(countdown)
//         console.log("you have reached the limit");
        
//     }
    
// },700)

// ASYNC AWAIT 
async function get (){
    try{
    let res =  await fetch("https://dummyjson.com/test")
    data =await res.json()
    console.log(data);
    
    }catch(err){
        console.log(err);
        
    }
  
}
get()

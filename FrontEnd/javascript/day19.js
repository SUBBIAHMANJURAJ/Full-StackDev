
// ODD OR EVEN

function oddOrEven(n) {
    if (n%2== 0) {
        console.log("Even Number");
        
    }
    else{
        console.log("odd number");
        
    }

}
oddOrEven(11)

// 2ND QUESTION

function sumToN(n) {
    let sum = 0; 

    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}

console.log(sumToN(3));


// FACTORIAL QUESTION

function factorial(n){
    let result=1;
    for (let i = 1; i>=n; i++){
        result=result * i;
        
    }
    return result;
}
console.log(factorial(55));

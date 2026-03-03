// 1.Write a function that removes duplicates in array without using Set.
function removeDuplicate(arr){
    let removed=[];
 for(i=0;i<arr.length;i++){
    if(removed.includes(arr[i])=== false){
        removed.push(arr[i])
    }
}
return removed;
}
console.log(removeDuplicate([1,2,3,4,5,1,2,3]));

// 2.Count how many numbers are even.
function howManyEven(arr){
 let count=0;
 for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        count++;
    }
 }
 return count;
}
console.log("There are " + howManyEven([1,2,3,4,5,6,7,8,9]) + " even numbers in the array.");
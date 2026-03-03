// Remove the element at index 3 from the array 
let arr=[100,200,300,400,500];
let result=arr.map((value,index)=>index!==3? value:null);
result=result.filter(value=>value!==null);
console.log(result);

//  Remove the first occurrence of 7 from the array [7, 14, 21, 7, 28].

let arr1=[7, 14, 21, 7, 28];
let remove1=arr1.map((value,index)=>value!==7? value:null);
remove1=remove1.filter(value=>value!==null);
console.log(remove1);   

// Replace all occurrences of 0 with 1 in the array [0, 1, 0, 1, 0].
let arr2=[0, 1, 0, 1, 0];
let replace=arr2.map(value=>value===0? 1:value);
console.log(replace);   

// Given the array [5, 10, 15, 20, 25], insert 12 between 10 and 15.
let arr3=[5, 10, 15, 20, 25];
let insert=arr3.map(value=>value===15? [12,15]:value).flat();
console.log(insert);

// Remove the second-to-last element from the array [2, 4, 6, 8, 10].
let arr4=[2, 4, 6, 8, 10];
let remove2=arr4.map((value,index)=>index!==arr4.length-2? value:null);
remove2=remove2.filter(value=>value!==null);
console.log(remove2);
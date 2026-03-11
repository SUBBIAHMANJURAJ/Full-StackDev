// PUSH

let arr=[1,2,3,4,5,6,7]
arr.push(8,9)
console.log(arr);

// POP

let arr1=[1,2,3,4,5,6]
arr1.pop()
console.log(arr1);


// ARRAY WITH FOR LOOP

let arr2=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<arr2.length;i++){
    if(arr2[i]% 2==0){
        console.log(arr2[i]);
        
    }

}

for(i=0;i<50;i++){
    if(i%2==0 && i%3==0){
        console.log(i);
        
    }
}


// Array Hydration

// SPLICE METHOD

let arrr=["Manju","Giffy","Sudalai","Spartan"]
arrr.splice(2,1,"Vijay")
console.log(arrr);

let arp=[1,2,4,5,6,7,9]
arp.splice(2,0,3)
arp.splice(7,0,8)
console.log(arp);

// PUSH METHOD

// ADD NUMBER OR STRING AT THE LAST

let arpush=[1,2,3,4,5,6,7]
arpush.push(8)
console.log(arpush);

// ADD NUMBER OR STRING AT THE LAST

let arpop=[2,4,6,8,10,12]
arpop.pop()
console.log(arpop);

// SHIFT METHOD USED TO REMOVE FIRST ELEMENT

let arshift=[13,1,2,3,4,5,6,7,8,9,10]
arshift.shift()
console.log(arshift);


// UNSHIFT METHOD USED TO REMOVE FIRST ELEMENT

let arunshift=[2,4,6,8,10,12]
arunshift.unshift(0)
console.log(arunshift);








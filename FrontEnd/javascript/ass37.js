const products =[
    {name:"Phone",category:"Electronics",price:1500},
    {name:"Shirt",category:"Clothing",price:500},
    {name:"Laptop",category:"Electronics",price:5000},
    {name:"Book",category:"Stationery",price:200}

];
const result=products.filter(p=>p.category==="Electronics" && p.price >1000)
console.log(result)

const productss = [
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 5000 }
];

const updated = productss.map(p => {
  if (p.name === "Phone") {
    return { ...p, price: p.price * 1.1 }; // increase by 10%
  }
  return p;
});

console.log(updated);
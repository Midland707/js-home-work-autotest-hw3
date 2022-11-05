//MODUL3 AUTOTEST19

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const result = [];
  for (const product of products) {
    if (product[propName]) result.push(product[propName]);
  }
  console.log(result);
  return result;
  // Change code above this line
}

getAllPropValues("name"); //повертає ["Radar", "Scanner", "Droid", "Grip"]
getAllPropValues("quantity"); //повертає [4, 3, 7, 9]
getAllPropValues("price"); //повертає [1300, 2700, 400, 1200]
getAllPropValues("category"); //повертає []

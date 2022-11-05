//MODUL3 AUTOTEST20

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let totalPrice = 0;
  for (const product of products) {
    if (product.name == productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  console.log(totalPrice);
  return totalPrice;
  // Change code above this line
}

calculateTotalPrice("Blaster"); //повертає 0
calculateTotalPrice("Radar"); //повертає 5200
calculateTotalPrice("Droid"); //повертає 2800
calculateTotalPrice("Grip"); //повертає 10800
calculateTotalPrice("Scanner"); //повертає 8100

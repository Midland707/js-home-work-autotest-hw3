//MODUL3 AUTOTEST18

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  let productFinded = 0;
  for (const product of products) {
    if (product.name == productName) {
      console.log(product.price);
      productFinded = 1;
      return product.price;
    }
  }
  if (productFinded === 0) {
    console.log(null);
    return null;
  }
  // Change code above this line
}

getProductPrice("Radar"); //повертає 1300.
getProductPrice("Grip"); //повертає 1200.
getProductPrice("Scanner"); //повертає 2700.
getProductPrice("Droid"); //повертає 400.
getProductPrice("Engine"); //повертає null.

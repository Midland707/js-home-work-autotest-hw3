//MODUL3 AUTOTEST10

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const keyVal in apartment) {
  keys.push(keyVal);
  values.push(apartment[keyVal]);
}

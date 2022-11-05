//MODUL3 AUTOTEST14

function countProps(object) {
  // Change code below this line
  let propCount = Object.keys(object).length;
  console.log(propCount);
  return propCount;
  // Change code above this line
}

countProps({}); //повертає 0
countProps({ name: "Mango", age: 2 }); //повертає 2
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); //повертає 3

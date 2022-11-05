//MODUL3 AUTOTEST12

function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  console.log(propCount);
  // Change code above this line
  return propCount;
}

countProps({ name: "Mango", age: 2 }); //повертає 2
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); //повертає 3

//MODUL3 AUTOTEST31

// Change code below this line
function add(...args) {
  let sum = 0;
  for (const arg of args) sum += arg;
  console.log(sum);
  return sum;
  // Change code above this line
}

add(15, 27); //повертає 42
add(12, 4, 11, 48); //повертає 75
add(32, 6, 13, 19, 8); //повертає 78
add(74, 11, 62, 46, 12, 36); //повертає 241

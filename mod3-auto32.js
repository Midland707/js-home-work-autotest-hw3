//MODUL3 AUTOTEST32

// Change code below this line
function addOverNum(first, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > first) {
      total += arg;
    }
  }
  console.log(total);
  return total;
  // Change code above this line
}

addOverNum(50, 15, 27); //повертає 0
addOverNum(10, 12, 4, 11, 48, 10, 8); //повертає 71
addOverNum(15, 32, 6, 13, 19, 8); //повертає 51
addOverNum(20, 74, 11, 62, 46, 12, 36); //повертає 218

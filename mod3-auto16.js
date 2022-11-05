//MODUL3 AUTOTEST16

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  for (const key in salaries) {
    if (salaries.hasOwnProperty(key)) {
      totalSalary += salaries[key];
    }
  }
  console.log(totalSalary);
  // Change code above this line
  return totalSalary;
}

countTotalSalary({}); //повертає 0
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); //повертає 330
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); //повертає 400

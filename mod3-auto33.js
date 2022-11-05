//MODUL3 AUTOTEST33

// Change code below this line
function findMatches(arr1, ...arr2) {
  const matches = []; // Don't change this line
  for (const arrFind of arr2) {
    for (const arr of arr1) {
      if (arr === arrFind) matches.push(arrFind);
    }
  }

  console.log(matches);
  // Change code above this line
  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); //повертає [1, 2]
findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); //повертає [17, 89, 2]
findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41); //повертає [24, 9, 41]
findMatches([63, 11, 8, 29], 4, 7, 16); //повертає []

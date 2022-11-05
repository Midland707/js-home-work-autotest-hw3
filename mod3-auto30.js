//MODUL3 AUTOTEST30

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newData = { completed, category, priority, ...data };
  console.log(newData);
  return newData;
  // Change code above this line
}

makeTask({}); //повертає { category: "General", priority: "Normal", completed: false }
makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }); //повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
makeTask({ category: "Finance", text: "Take interest" }); //повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
makeTask({ priority: "Low", text: "Choose shampoo" }); //повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
makeTask({ text: "Buy bread" }); //повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

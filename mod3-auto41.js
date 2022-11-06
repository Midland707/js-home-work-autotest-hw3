//MODUL3 AUTOTEST41

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    console.log("Виклик методу - getPotions");
    console.log(this.potions);
    return this.potions;
  },
  addPotion({ name, price }) {
    console.log("Виклик методу - addPotion з параметрами :", { name, price });
    for (const potion of this.potions) {
      if (name === potion.name) {
        console.log(
          `Error! Potion ${potion.name} is already in your inventory!`
        );
        return `Error! Potion ${potion.name} is already in your inventory!`;
      }
    }
    this.potions.push({ name, price });
    console.log(this.potions);
  },
  removePotion(potionName) {
    console.log("Виклик методу - removePotion з параметром -", potionName);
    let potionIndex = -1;
    for (const potion of this.potions) {
      potionIndex += 1;
      if (potionName === potion.name) break;
    }
    if (potionIndex === -1) {
      console.log(`Potion ${potionName} is not in inventory!`);
      console.log(this.potions);
      return `Potion ${potionName} is not in inventory!`;
    }
    console.log(potionName, "- Видалено!");
    this.potions.splice(potionIndex, 1);
    console.log(this.potions);
  },
  updatePotionName(oldName, newName) {
    console.log("Виклик методу - updatePotionName");
    let potionIndex = -1;
    for (const potion of this.potions) {
      potionIndex += 1;
      if (oldName === potion.name) {
        potion.name = newName;
        break;
      }
    }
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    console.log(`Зілля ${oldName} замінено на ${newName}`);
    console.log(this.potions);
  },
  // Change code above this line
};

atTheOldToad.getPotions(); //для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.addPotion({ name: "Invisibility", price: 620 }); //в масиві potions останнім елементом буде цей об'єкт
atTheOldToad.addPotion({ name: "Power potion", price: 270 }); //в масиві potions останнім елементом буде цей об'єкт
atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }); //масив potions не змінюється
atTheOldToad.addPotion({ name: "Stone skin", price: 240 }); //массив potions не змінюється
atTheOldToad.removePotion("Dragon breath"); //у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.removePotion("Speed potion"); //у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); //у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"); //у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

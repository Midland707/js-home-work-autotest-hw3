//MODUL3 AUTOTEST40

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    console.log("Potions before : ", this.potions);
    const potionsIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionsIndex, 1, newName);
    console.log("Potions after : ", this.potions);
    // Change code above this line
  },
};

atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); //у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
atTheOldToad.updatePotionName("Stone skin", "Invisibility"); //у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]

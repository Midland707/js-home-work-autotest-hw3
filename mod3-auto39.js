//MODUL3 AUTOTEST39

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    console.log(`Deleting potion - ${potionName}`);
    const potionsIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionsIndex, 1);
    console.log(this.potions);
    // Change code above this line
  },
};

atTheOldToad.removePotion("Dragon breath"); //у властивості potions буде масив ["Speed potion", Stone skin"]
atTheOldToad.removePotion("Speed potion"); //у властивості potions буде масив ["Stone skin"]

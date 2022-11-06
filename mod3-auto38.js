//MODUL3 AUTOTEST38

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    console.log(`Adding potion - ${potionName}`);
    this.potions.push(potionName);
    console.log(this.potions);
    // Change code above this line
  },
};

atTheOldToad.addPotion("Invisibility"); //у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
atTheOldToad.addPotion("Power potion"); //у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

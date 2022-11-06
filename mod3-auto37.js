//MODUL3 AUTOTEST37

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions() {
    console.log("potions", this.potions);
    return this.potions;
  },
  // Change code above this line
};

atTheOldToad.getPotions(); //повертає ["Speed potion", "Dragon breath", "Stone skin"]

//MODUL3 AUTOTEST36

const atTheOldToad = {
  // Change code below this line
  potions: [],
  getPotions() {
    console.log("Returning all potions");
    return this.potions;
  },
  addPotions(potionsName) {
    console.log(`Adding potion - ${potionsName}`);
    return this.potions.push(potionsName);
  },
  removePotions(potionsName) {
    console.log(`Deleting potion - ${potionsName}`);
    const potionsIndex = this.potions.indexOf(potionsName);
    this.potions.splice(potionsIndex, 1);
  },
  updatePotions(oldName, newRename) {
    console.log("Potions before : ", this.potions);
    const potionsIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionsIndex, 1, newName);
    console.log("Potions after : ", this.potions);
  },
  // Change code above this line
};

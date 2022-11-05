//MODUL3 AUTOTEST35

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    console.log("Books before : ", this.books);
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    console.log("Books after : ", this.books);
    // Change code above this line
  },
};

bookShelf.updateBook("Haze", "Dungeon chronicles"); //, значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
bookShelf.updateBook("The last kingdom", "Dune"); //, значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

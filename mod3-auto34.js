//MODUL3 AUTOTEST34

const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    console.log("Returning all books");
    return "Returning all books";
  },
  addBook(bookName) {
    console.log(`Adding book - ${bookName}`);
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    console.log(`Deleting book - ${bookName}`);
    return `Deleting book ${bookName}`;
  },
  updateBook(bookName, bookRename) {
    console.log(`Updating book ${bookName} to ${bookRename}`);
    return `Updating book ${bookName} to ${bookRename}`;
  },
  // Change code above this line
};

bookShelf.getBooks(); //повертає рядок "Returning all books"
bookShelf.addBook("Haze"); //повертає рядок "Adding book Haze"
bookShelf.removeBook("Red sunset"); //повертає рядок "Deleting book Red sunset"
bookShelf.updateBook("Sands of dune", "Dune"); //повертає рядок "Updating book Sands of dune to Dune"

class User {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.books = [];
    this.pets = [];
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
  addPets(name) {
    this.pets.push(name);
  }
  countPets() {
    return this.pets.length;
  }
  addBook(name, autor) {
    this.books.push({ name: name, autor: autor });
  }
  getBookNames() {
    return this.books.map((book) => {
      return book.name;
    });
  }
}

const firstUser = new User("Juan Pablo", "Ubelhart");

firstUser.addPets("Perro");
firstUser.addPets("Gato");

firstUser.addBook("Juego de Tronos", "George R. R. Martin");
firstUser.addBook("Shutter Island", "Dennis Lehane");

console.log(firstUser.getFullName());
console.log(firstUser.countPets());
console.log(firstUser.getBookNames());

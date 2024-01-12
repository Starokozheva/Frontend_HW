class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        if(!Person.oldestPerson || this.age > Person.oldestPerson.age) {
            Person.oldestPerson = this;
        }
    }

    static compareAge(person1, person2) {
        return person1.age - person2.age;
    }
}

const person1 = new Person("John", "Smith", 30);
const person2 = new Person("Mark", "Johnson", 35);

console.log(person1.age);
console.log(Person.oldestPerson);
console.log(Person.compareAge(person1, person2))



class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;

    if (!Book.allBooks) {
      Book.allBooks = [];
    }

    Book.allBooks.push(this);
  }

  static listAuthors() {
    const authors = [];
    for (const book of Book.allBooks) {
      if (!authors.includes(book.author)) {
        authors.push(book.author);
      }
    }
    return authors;
  }
}
const book1 = new Book("Book 1", "Author 1", 2020);
const book2 = new Book("Book 2", "Author 2", 2018);
const book3 = new Book("Book 3", "Author 1", 2015);

for (const book of Book.allBooks) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}`);
}

console.log(Book.listAuthors());

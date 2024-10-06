console.log("OOP Start ----------");
// Objects (Nesneler)
const person = {
  name: "Mehmet Halil",
  age: 31,
  greet: function () {
    console.log(`Hello, my name is ${this.name}, i am ${this.age} years old!`);
  },
};

person.greet();

// Constructor Functions
// constructor fonksiyonlar ayni turde nesneler olusturmak icin kullanilir.
// `new` anahtar kelime ile cagirildiginda, bos bir nesne olusturur ve `this` olarak atanir.

function Person(name, age, surname) {
  this.name = name;
  this.age = age;
  this.surname = surname;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}, i am ${this.age} years old!`);
  };
}

const fatmaNur = new Person("Fatmanur", 29, "Mungan");
fatmaNur.greet();

// Prototype
// Her nesne gizli bir prototype nesnesine sahiptir. Nesneler arasında iliski kurulur.
// Bellek kullanimini optimize eder.

Person.prototype.saySurname = function () {
  console.log(`My surname is: ${this.surname}`);
};

fatmaNur.saySurname();

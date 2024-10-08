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

// ES6 ile gelen siniflar ile
// ES6 ile once class yazilir sonrasinda { } ile icine girilir. bir constructor olusturulur. sonrasinda this ile nesleler tanimlanir.
// Ardimdan fonksiyonlari olusturabilirsin.

class NewPerson {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} ${this.surname}.`);
  }

  sayAge() {
    console.log(`I am ${this.age} years old!`);
  }
}

const halilMoongun = new NewPerson("Halil", "Mungan", 31);
halilMoongun.sayAge(); // I am 31 years old!
halilMoongun.greet(); // My name is Halil Mungan.

// Inherutance (Kalitim)

class Employee extends NewPerson {
  constructor(name, surname, age, jobTitle) {
    super(name, surname, age);
    this.jobTitle = jobTitle;
  }
  descriptionEmployee() {
    console.log(
      `Employee name: ${this.name} ${this.surname}, he is a ${this.jobTitle}`,
    );
  }
}

const employee = new Employee("Halil", "Mungan", 31, "Software Developer");
employee.descriptionEmployee();
employee.greet();

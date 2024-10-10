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

// Inheritance (Kalitim)

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

// Encapsulation (Kapsulleme)

class Car {
  #name;
  #model;

  constructor(name, model) {
    this.#name = name;
    this.#model = model;
  }

  greet() {
    console.log(`This is ${this.#name}, ${this.#model} car!`);
  }

  getModel() {
    console.log(`This car ${this.#model}`);
  }
}

const mercedes = new Car("Mercedes", 2023);
mercedes.greet();
mercedes.getModel();

// Abstract (Soyutlama)

class CoffeMachine {
  constructor() {
    if (new.target === CoffeMachine) {
      throw new Error("Abstract class 'CoffeMachine' cannot be instantiated");
    }
  }

  start() {
    this.boilerWater();
    this.brew();
    console.log(`Coffe is ready.`);
  }

  boilerWater() {
    throw new Error("This is error");
  }

  brew() {
    throw new Error("This is error");
  }
}

class Coffe extends CoffeMachine {
  boilerWater() {
    console.log("Boiling water");
  }

  brew() {
    console.log("Steeping coffe");
  }
}

// burasi calisir
const coffe = new Coffe();
coffe.start();
// Boiling water
// Steeping coffe
// Coffe is ready.

// burasi calismaz cunku orneklenemez bu class bir abstract gibi davraniyor!
// const machine = new CoffeMachine();
// machine.start();
// Error: Abstract class 'CoffeMachine' cannot be instantiated

// Polymorphism (Polimorfizm cok bicimlilik)
class Shape {
  constructor(name) {
    this.name = name;
  }

  calculateArea() {
    throw new Error("Method 'calculateArea()' must be implemented");
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  constructor(name, sideLenght) {
    super(name);
    this.sideLenght = sideLenght;
  }

  calculateArea() {
    return this.sideLenght ** 2;
  }
}

function printArea(shape) {
  console.log(`This area of the ${shape.name} is: ${shape.calculateArea()}`);
}

const myCircle = new Circle("circle", 5);
const mySquare = new Square("square", 4);

printArea(myCircle);
printArea(mySquare);

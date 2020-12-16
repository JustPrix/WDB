// String.prototype.yell = function () {
//   return `OMG!!! ${this.toUpperCase()}!!!!!`;
// };

// Array.prototype.pop = function () {
//   return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
// };

//=====>> Extends and Super

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return 'MEOOWWWW!!';
  }
}

class Dog extends Pet {
  bark() {
    return 'WOOFF!!';
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}

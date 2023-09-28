// 클래스를 베이스로한 객체지향 프로그래밍

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log("같이 놀자옹!");
  }
}

class Panda extends Animal {
  eat() {
    console.log("대나무 먹바옹 🎋");
  }
}

const dog1 = new Dog("바우", "🐶", "우디");
const panda1 = new Panda("푸바오", "🐼");
dog1.printName(); // 바우 🐶
panda1.printName(); // 푸바오 🐼
dog1.play(); // 같이 놀자옹!
panda1.eat(); // 대나무 먹바옹 🎋

console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Panda); // false
console.log(panda1 instanceof Dog); // false
console.log(panda1 instanceof Animal); // true
console.log(panda1 instanceof Panda); // true

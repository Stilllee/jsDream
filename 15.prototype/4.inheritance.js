// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji);
  Animal.call(this, name, emoji); // Animal의 this를 Dog의 this로 바인딩
  this.owner = owner; // Dog의 this에 owner 추가
}
// Dog.prototype = Ibject.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log("같이 놀자옹!");
};

const dog1 = new Dog("바우", "🐶", "우디");
dog1.play(); // 같이 놀자옹!
dog1.printName(); // 바우 🐶

function Panda(name, emoji) {
  Animal.call(this, name, emoji);
}
Panda.prototype = Object.create(Animal.prototype);
Panda.prototype.eat = () => {
  console.log("대나무 먹바옹 🎋");
};

const panda1 = new Panda("푸바오", "🐼");
panda1.printName(); // 판다 🐼
panda1.eat(); // 대나무 먹바옹 🎋

// 상속도 확인 하는 법
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Panda); // false
console.log(panda1 instanceof Dog); // false
console.log(panda1 instanceof Animal); // true
console.log(panda1 instanceof Panda); // true

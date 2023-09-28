// 오브젝트는 단 하나의 prototype을 가리킬 수 있다. (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶다!
//  Mixin!

const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog("바우");
console.log(dog); // Dog { name: '바우' }
dog.play(); // 바우 놀아요!
dog.sleep(); // 바우 자요!

class Animal {}
class Panda extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Panda.prototype, play, sleep);
const panda = new Panda("푸바오");
panda.play(); // 푸바오 놀아요!
panda.sleep(); // 푸바오 자요!

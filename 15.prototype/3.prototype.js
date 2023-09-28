/* const friend1 = { name: "우드스탁", emoji: "🐤" };
const friend2 = { name: "스누피", emoji: "🐶" }; */

function Friend(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  /*
    // 인스턴스 레벨의 함수, friend의 수만큼 함수가 생성됨
    this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; 
  */

  // 프로토타입 레벨의 함수, friend의 수와 상관없이 하나의 함수만 생성됨
  // 메모리를 절약할 수 있음
  Friend.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
  };
}
const friend1 = new Friend("우드스탁", "🐤");
const friend2 = new Friend("스누피", "🐶");
console.log(friend1, friend2);
friend1.printName(); // 우드스탁 🐤
friend2.printName(); // 스누피 🐶

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면(오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼니느 가려짐(섀도잉 됨)
friend1.printName = function () {
  console.log("안녕!");
};
friend1.printName(); // 안녕!

// 정적 레벨
Friend.hello = () => {
  console.log("안녕하세요!");
};
Friend.hello(); // 안녕하세요!
Friend.MAX_AGES = 100;

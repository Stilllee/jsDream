const dog = { name: "바우", emoji: "🐶" };
console.log(Object.keys(dog)); // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // [ '바우', '🐶' ]
console.log(Object.entries(dog)); // [ [ 'name', '바우' ], [ 'emoji', '🐶' ] ]

console.log("name" in dog); // true
console.log(dog.hasOwnProperty("name")); // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);
console.log(des);
// {name: { value: '바우', writable: true, enumerable: true, configurable: true }, emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }}
// writable: 값을 업데이트할 수 있는지
// enumerable: 값을 열거할 수 있는지
// configurable: 값이나 속성을 수정 또는 삭제할 수 있는지

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc); // { value: '바우', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, "name", {
  value: "와우",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name); // 와우
console.log(Object.keys(dog)); // [ 'emoji' ], name은 열거가 불가능
delete dog.name; // 삭제 불가능
console.log(dog.name); // 와우

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "Charlie",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Brown",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set() {
      [this.lastName, this.firstName] = name.split(" ");
    },
    configurable: true,
  },
});
console.log(student); // { firstName: 'Charlie', lastName: 'Brown'}

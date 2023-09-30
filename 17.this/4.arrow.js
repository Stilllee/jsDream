// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체)이 생성됨

const dog = {
  name: "Dog",
  // 💩 객체 안에서 함수 표현식을 사용하는 것은 좋지 않음
  play: function () {
    console.log("놀자멍");
  },
};
dog.play(); // 놀자멍
const obj = new dog.play(); // 💩
console.log(obj); // dog.play()의 프로토타입이 생성됨 (play {} 출력)

// ES6
const cat = {
  name: "cat",
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log("놀자냥");
  },
};
cat.play(); // 놀자냥
// const obj2 = new cat.play(); // 생성자 함수로 사용 ❌

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2); // [Arguments] { '0': 1, '1': 2 }

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();

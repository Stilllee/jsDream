"use strict";
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드가 적용되어있다.
var x = 1;
delete x; // 안됨

function add(x) {
  var a = 2;
  b = a + x; // 키워드 생략 불가능
  console.log(this); // 함수내부에서 this는 undefined
}
add(1);

cosnt array = [1, 2, 3];
for (num of array) { // let, const로 num을 선언하지 않으면 안됨
  console.log(num);
}
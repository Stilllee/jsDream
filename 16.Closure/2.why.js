// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메서드를 사용하는 효과와 동일!

function makeCounter() {
  let count = 0; // private

  // 초기에는 private 함수지만, makeCounter의 반환값으로 외부에 공개되므로 public처럼 동작함
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter(); //
increase(); // 1
increase(); // 2
increase(); // 3

class Counter {
  #count = 0; // private
  increase() {
    // increase 메서드를 통해서만 내부의 #count 값을 변경하고 출력할 수 있음
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase(); // 1
counter.increase(); // 2
counter.increase(); // 3

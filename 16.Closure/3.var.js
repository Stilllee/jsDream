function loop() {
  const array = [];
  // var와 let의 차이점!
  for (let i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());

// let은 0, 1, 2, 3, 4를 출력
// var는 5를 다섯번 출력
